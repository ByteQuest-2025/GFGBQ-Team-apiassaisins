package com.Aura.Dto;

import jakarta.validation.constraints.NotBlank;

public class ComplaintRequest {
    @NotBlank
    private String description;
    private String Location;
    private String category;
    private String severity;

    //parametruzed constructor
   
    public ComplaintRequest(String description, String Location, String category) {
        this.description = description;
        this.Location = Location;
        this.category = category;
    }

     public ComplaintRequest(String description, String Location, String category, String severity) {
        this.description = description;
        this.Location = Location;
        this.category = category;
        this.severity = severity;
    }




    //parametruzed constructor
   
    public ComplaintRequest(String description, String Location, String category) {
        this.description = description;
        this.Location = Location;
        this.category = category;
    }


    //getter and setters
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getLocation() {
        return Location;
    }
    public void setLocation(String location) {
        Location = location;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }


    public String getSeverity() {
        return severity;
    }


    public void setSeverity(String severity) {
        this.severity = severity;
    }
    
}
