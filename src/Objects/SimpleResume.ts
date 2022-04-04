import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

export interface SimpleResume {
    siteName?:                  string;
    name?:                      string;
    callOut?:                   string
    resume?:                    Resume;
    pageTitle?:                 string;
    masthead?:                  Masthead;
    pageDescription?:           string;
    mainSections?:              MainSection[];
    icons?:                     Icon;
    resumePageTitle?:           string;
    portfolioPageTitle?:        string;
    skillsPageTitle?:           string;
    getIconName?(name : string):  IconName;
    getIconPrefix?(name : string):  IconPrefix;
}


export interface Icon {
    [key: string]:  IconDetail;
}

export interface IconDetail {
    clz?: string;
    name?: string;
}

export interface MainSection {
    name?: string;
    iconName?: string;
    description?: string;
    img?: string;
}

export interface Masthead {
    youngAlt: string;
    todayAlt: string;
}

export interface Resume {
    basics:       Basics;
    work:         Work[];
    volunteer:    Volunteer[];
    education:    Education[];
    awards:       Award[];
    publications: Publication[];
    skills:       Skill[];
    languages:    Language[];
    interests:    Interest[];
    projects:     Project[];
}

export interface Project {
    name:          string;
    description:   string;
    highlights:    string[];
    keywords:      string[];
    startDate:     string;
    endDate:       string;
    url:           string;
    roles:         string[];
    entity:        string;
    type:          string;
    img:           string;
}

export interface Award {
    title:   string;
    date:    string;
    awarder: string;
    summary: string;
}

export interface Basics {
    name:     string;
    label:    string;
    picture:  string;
    email:    string;
    phone:    string;
    degree:   string;
    website:  string;
    summary:  string;
    location: Location;
    profiles: Profile[];
}

export interface Location {
    address:     string;
    postalCode:  string;
    city:        string;
    countryCode: string;
    region:      string;
}

export interface Profile {
    network:  string;
    username: string;
    url:      string;
}

export interface Education {
    institution: string;
    area:        string;
    studyType:   string;
    startDate:   string;
    endDate:     string;
    gpa:         string;
    courses:     string[];
}

export interface Interest {
    name:     string;
    keywords: string[];
}

export interface Language {
    language: string;
    fluency:  string;
}

export interface Publication {
    name:        string;
    publisher:   string;
    releaseDate: string;
    website:     string;
    summary:     string;
}

export interface Skill {
    name:     string;
    level:    string;
    keywords: string[];
}

export interface Work {
    name:          string;
    position:      string;
    website:       string;
    startDate:     string;
    endDate:       string;
    summary:       string;
    highlights:    string[];
    location:       string;
}

export interface Volunteer {
    organization:  string;
    position:      string;
    website:       string;
    startDate:     string;
    endDate:       string;
    summary:       string;
    highlights:    string[];
    company?:      string;
}
