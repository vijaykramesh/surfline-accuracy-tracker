package model

import "gorm.io/gorm"

type SurflineSite struct {
	gorm.Model
	SurflineID string `json:"surflineId"`
	Name       string `json:"name"`
	URL        string `json:"url"`
}
