#!/bin/bash

# Colores para el texto
BLUE="\033[34m"
GREEN="\033[32m"
YELLOW="\033[33m"
RED="\033[31m"
RESET="\033[0m"

ENVIRONMENT="unknown"

detect_package_manager() {
    if command -v apt >/dev/null 2>&1; then
        ENVIRONMENT="apt"
    elif command -v dnf >/dev/null 2>&1; then        ENVIRONMENT="dnf"
    elif command -v yum >/dev/null 2>&1; then
        ENVIRONMENT="yum"
    elif command -v pacman >/dev/null 2>&1; then
        ENVIRONMENT="pacman"
    elif command -v zypper >/dev/null 2>&1; then
        ENVIRONMENT="zypper"
    else
        ENVIRONMENT="unknown"
    fi
}

install_python() {
    case $ENVIRONMENT in
        apt)
            sudo apt update && sudo apt install -y python3
            ;;
        dnf)
            sudo dnf install -y python3
            ;;
        yum)
            sudo yum install -y python3
            ;;
        pacman)
            sudo pacman -Sy python
            ;;
        zypper)
            sudo zypper install -y python3
            ;;
        *)
            echo -e "${RED}Package manager is not suported.${RESET}"
            exit 1
            ;;
    esac
}

main() {
    detect_package_manager

    if command -v python3 >/dev/null 2>&1; then
        continue
    else
        echo -e "${RED}Python3 is not installed${RESET}"
        echo -e "${BLUE}Do you want to install it? ${GREEN}(y/n)${RESET}"
        read -r install_response

        if [[ "$install_response" =~ ^[Yy]$ ]]; then
            echo -e "${YELLOW}Installing Python3...${RESET}"
            install_python
        else
            echo -e "${RED}Python3 is not going to be installed. Exiting.${RESET}"
            exit 1
        fi
    fi

    pip install -r  ./requirements.txt
    python3 ./nextStep-cv/backend/main.py
}

main

