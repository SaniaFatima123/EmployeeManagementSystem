package com.example.employeems.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employee")
public class Employee {
    @Id
    @GeneratedValue
    private long id;
    private String name;
    private String skills;

    private int empleaves;

    public int getEmpleaves() {
        return empleaves;
    }

    public void setEmpleaves(int empleaves) {
        this.empleaves = empleaves;
    }

    public Employee() {
    }

    public Employee(String name, String skills, int leaves) {
        this.name = name;
        this.skills = skills;
        this.empleaves = leaves;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }
}
