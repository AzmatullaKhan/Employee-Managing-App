package com.model;

public class EmployeeTaskModel {
	String mid,aid, aTaskHead, aTaskDescription, eid;
	public String getEid() {
		return eid;
	}
	public void setEid(String eid) {
		this.eid = eid;
	}
	int aTaskDurationDays, aTaskDurationHours;
	public String getMid() {
		return mid;
	}
	public void setMid(String mid) {
		this.mid = mid;
	}
	public String getAid() {
		return aid;
	}
	public void setAid(String aid) {
		this.aid = aid;
	}
	public String getaTaskHead() {
		return aTaskHead;
	}
	public void setaTaskHead(String aTaskHead) {
		this.aTaskHead = aTaskHead;
	}
	public String getaTaskDescription() {
		return aTaskDescription;
	}
	public void setaTaskDescription(String aTaskDescription) {
		this.aTaskDescription = aTaskDescription;
	}
	public int getaTaskDurationDays() {
		return aTaskDurationDays;
	}
	public void setaTaskDurationDays(int aTaskDurationDays) {
		this.aTaskDurationDays = aTaskDurationDays;
	}
	public int getaTaskDurationHours() {
		return aTaskDurationHours;
	}
	public void setaTaskDurationHours(int aTaskDurationHours) {
		this.aTaskDurationHours = aTaskDurationHours;
	}
}
