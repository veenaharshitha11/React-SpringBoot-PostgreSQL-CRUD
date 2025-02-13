# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the built JAR file into the container
COPY target/*.jar app.jar

# Expose the port Spring Boot runs on
EXPOSE 8085

# Run the application
CMD ["java", "-jar", "app.jar"]
