#!/bin/sh
JAVA_OPTS="$JAVA_OPTS -javaagent:/applicationinsights-agent-3.4.19.jar"
java $JAVA_OPTS -Djavax.net.ssl.trustStorePassword=changeit -Djava.security.egd=file:/dev/./urandom -jar /app.jar
