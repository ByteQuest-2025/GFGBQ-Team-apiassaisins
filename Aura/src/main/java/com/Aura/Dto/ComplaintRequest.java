package com.Aura.Dto;

import jakarta.validation.constraints.NotBlank;

public class ComplaintRequest {
    @NotBlank
    private String description;
    private String Location;
    private String category;

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
    
}
