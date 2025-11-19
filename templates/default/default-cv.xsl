<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" indent="yes"/>
    <xsl:template match="/">
        <html>
        <head>
            <meta charset="utf-8"/>
            <link rel="stylesheet" href="./default-cv.css"/>
        </head>
        <xsl:for-each select="curriculum">
            <div class="page">
                <div class="left-column">
                    <div class="curriculum" style="font-family:Segoe UI, Arial, sans-serif; margin:20px;">
                        <div class="persona">
                            <div class="photo" >
                                <img style="width:100%; border-radius:8px;" alt="foto">
                                    <xsl:attribute name="src"><xsl:value-of select="photo"/></xsl:attribute>
                                </img>
                            </div>
                            <h1><xsl:value-of select="name"/></h1>
                            <p><xsl:value-of select="presentation"/></p>
                        </div>

                        <h2>Experiencia</h2>
                        <xsl:for-each select="work_experience">
                            <div class="work-experience" style="margin-bottom:10px;">
                                <p><strong><xsl:value-of select="company"/></strong> — <xsl:value-of select="role"/></p>
                                <p><p><xsl:value-of select="duration"/></p></p> <!--MM/YYYY/MM/YYYY-->
                                <p><xsl:value-of select="description"/></p>
                            </div>
                        </xsl:for-each>

                        <h2>Skills</h2>
                        <ul>
                            <xsl:for-each select="skills/skill_name">
                                <li><xsl:value-of select="."/></li>
                            </xsl:for-each>
                        </ul>

                        <h2>Logros</h2>
                        <ul>
                            <xsl:for-each select="achievements/achievement">
                                <li><xsl:value-of select="."/></li>
                            </xsl:for-each>
                        </ul>
                            </div>
                        </div>
                        <div class="right-column">
                        <h2>Contacto</h2>
                        <ul>
                            <xsl:for-each select="contact_info/contact_way">
                                <li><xsl:value-of select="contact_data"/></li>
                            </xsl:for-each>
                        </ul>

                        <h2>Educación</h2>
                        <xsl:for-each select="education">
                            <div>
                                <p><strong><xsl:value-of select="degree"/></strong> — <xsl:value-of select="institution"/></p>
                                <p><xsl:value-of select="year"/></p>
                            </div>
                        </xsl:for-each>

                        <h2>Idiomas</h2>
                        <xsl:for-each select="languages">
                            <p><strong><xsl:value-of select="language"/></strong> — <xsl:value-of select="proficiency"/></p>
                        </xsl:for-each>

                        <h2>Otras actividades</h2>
                        <ul>
                            <xsl:for-each select="other_activities/activity">
                                <li><xsl:value-of select="."/></li>
                            </xsl:for-each>
                        </ul>
                </div>
            </div>
        </xsl:for-each>
        </html>
    </xsl:template>
</xsl:stylesheet>