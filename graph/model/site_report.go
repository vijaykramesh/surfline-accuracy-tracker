package model

import "gorm.io/gorm"

type SiteReport struct {
	gorm.Model
	Email            string            `json:"email"`
	SurflineSiteId   string            `json:"surflineSiteId"`
	SurflineSite     *SurflineSite     `json:"surflineSite"`
	SurflineRating   *SurflineRating   `json:"surflineRating,omitempty"`
	SiteReportRating SiteReportRating  `json:"SiteReportRating"`
	AccuracyEstimate *AccuracyEstimate `json:"accuracyEstimate,omitempty"`
	Timestamp        int               `json:"timestamp"`
}
