import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const CategoryListing = () => {
  const { category } = useParams();
  const [sortBy, setSortBy] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");

  const categoryNames = {
    "office-automation": "Office Automation",
    "visual-solution": "Visual Solution",
    purifiers: "Purifiers",
    "allans-medical": "Allans Medical",
    "adonis-medical": "Adonis Medical",
    "covid-19": "COVID 19",
    "unified-communications": "Unified Communications",
    "hp-seriesepabx": "HP Series(EPABX)",
    all: "All Products",
  };

  // ... keep existing code (products array) the same

  const products = [
    // Office Automation Products
    {
      id: 1,
      name: "A4 Monochrome (Photocopier)",
      category: "office-automation",
      image:
        "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=400&h=300&fit=crop",
      inStock: true,
      description: "Smooth Print Functionality With Wireless Support",
    },
    {
      id: 2,
      name: "A4 Monochrome MFP (Photocopier)",
      category: "office-automation",
      image:
        "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=400&h=300&fit=crop",
      inStock: true,
      description: "Expandable Document Production for Workgroups on the Grow",
    },
    {
      id: 3,
      name: "A3 Monochrome MFP(Photocopier)",
      category: "office-automation",
      image:
        "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=400&h=300&fit=crop",
      inStock: true,
      description: "Large format A3 monochrome multifunction printer",
    },
    {
      id: 4,
      name: "A3 Colour(Photocopier)",
      category: "office-automation",
      image:
        "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=400&h=300&fit=crop",
      inStock: true,
      description: "Professional A3 color multifunction printer for business",
    },
    {
      id: 5,
      name: "A3 Business Color MFP(Photocopier)",
      category: "office-automation",
      image:
        "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=400&h=300&fit=crop",
      inStock: true,
      description:
        "Advanced A3 color multifunction printer with enhanced features",
    },
    {
      id: 6,
      name: "A3 Business advanced colour MFP(Photocopier)",
      category: "office-automation",
      image:
        "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop",
      inStock: true,
      description: "High-performance enterprise printer",
    },
    {
      id: 7,
      name: "Epson Workforce Enterprise WF-C20590 (Printer)",
      category: "office-automation",
      image:
        "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop",
      inStock: true,
      description: "Professional workforce printer",
    },
    {
      id: 8,
      name: "Epson Workforce Pro WF-C5790(Printer)",
      category: "office-automation",
      image:
        "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop",
      inStock: true,
      description: "Monochrome professional printer",
    },
    {
      id: 9,
      name: "Epson Workforce Pro WF-M5799(Printer)",
      category: "office-automation",
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop",
      inStock: true,
      description: "Professional visual display solution",
    },

    // Visual Solution Products
    {
      id: 10,
      name: "PN-Y436",
      category: "visual-solution",
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop",
      inStock: true,
      description: "High-resolution display system",
    },
    {
      id: 11,
      name: "PN-Q801",
      category: "visual-solution",
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop",
      inStock: true,
      description: "Advanced visual communication solution",
    },
    {
      id: 12,
      name: "PN_V550A",
      category: "visual-solution",
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop",
      inStock: true,
      description: "Interactive touch display for presentations",
    },
    {
      id: 13,
      name: "PN-80TC3",
      category: "visual-solution",
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop",
      inStock: true,
      description: "Compact touch display solution",
    },
    {
      id: 14,
      name: "PN-40TC1",
      category: "visual-solution",
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop",
      inStock: true,
      description: "Professional grade display system",
    },
    {
      id: 15,
      name: "PN-70TW3A",
      category: "visual-solution",
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop",
      inStock: true,
      description: "Professional grade display system",
    },

    // Purifiers
    {
      id: 16,
      name: "FP-J80M-H (Home Purifier)",
      category: "purifiers",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      inStock: true,
      description: "Advanced home air purification system",
    },
    {
      id: 17,
      name: "FP-J40M-W (Home Purifier)",
      category: "purifiers",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      inStock: true,
      description: "Compact home air purifier",
    },
    {
      id: 18,
      name: "FP-J60M-W (Home Purifier)",
      category: "purifiers",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      inStock: true,
      description: "Mid-range home air purification system",
    },
    {
      id: 19,
      name: "FU-A28E-W (Home Purifier)",
      category: "purifiers",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      inStock: true,
      description: "Entry-level home air purifier",
    },
    {
      id: 20,
      name: "FP-JC2M-B (Car Purifier)",
      category: "purifiers",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      inStock: true,
      description: "Portable car air purification system",
    },
    {
      id: 21,
      name: "IG-GC2E (Car Purifier)",
      category: "purifiers",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      inStock: true,
      description: "Premium car air purifier (Black/Gold)",
    },
    {
      id: 22,
      name: "IG-DC2E-B (Car Purifier)",
      category: "purifiers",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      inStock: true,
      description: "Compact car air purification device",
    },

    // Allans Medical
    {
      id: 23,
      name: "Portable X-Ray Machine 30mA (Machines)",
      category: "allans-medical",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      inStock: true,
      description: "Portable X-ray system for mobile healthcare",
    },
    {
      id: 24,
      name: "Portable X-Ray Machine 50mA(Machines)",
      category: "allans-medical",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      inStock: true,
      description: "High-capacity portable X-ray system",
    },
    {
      id: 25,
      name: "100 MA X-Ray Machine(Machines)",
      category: "allans-medical",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      inStock: true,
      description: "High-capacity X-ray imaging system",
    },
    {
      id: 26,
      name: "300 MA X-Ray Machine(Machines)",
      category: "allans-medical",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      inStock: true,
      description: "Professional grade X-ray system",
    },
    {
      id: 27,
      name: "500 MA X-Ray Machine(Machines)",
      category: "allans-medical",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      inStock: true,
      description: "High-end X-ray imaging system",
    },
    {
      id: 28,
      name: "Dental X-Ray Machine(Machines)",
      category: "allans-medical",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      inStock: true,
      description: "Specialized dental X-ray system",
    },
    {
      id: 29,
      name: "Floor Mounted X-Ray Unit(Machines)",
      category: "allans-medical",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      inStock: true,
      description: "Floor-mounted X-ray imaging unit",
    },
    {
      id: 30,
      name: "OPG Machine(Machines)",
      category: "allans-medical",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      inStock: true,
      description: "Orthopantomogram imaging system",
    },
    {
      id: 31,
      name: "ECG Machine (Medical Equipment & ECP Machines)",
      category: "allans-medical",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
      inStock: true,
      description: "Professional electrocardiogram machine",
    },
    {
      id: 32,
      name: "Computed Radiography System(Medical Equipment & ECP Machines)",
      category: "allans-medical",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      inStock: true,
      description: "Digital radiography imaging system",
    },
    {
      id: 33,
      name: "C-Arm Machine(Medical Equipment & ECP Machines)",
      category: "allans-medical",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      inStock: true,
      description: "Mobile C-arm imaging system",
    },
    {
      id: 34,
      name: "OPG Machine for Panoramic Radiography(Medical Equipment & ECP Machines)",
      category: "allans-medical",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      inStock: true,
      description: "OPG Machine",
    },
    {
      id: 35,
      name: "Ultrasound Machine (Sonography Equipment)",
      category: "allans-medical",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      inStock: true,
      description: "Advanced ultrasound imaging system",
    },

    // Adonis Medical
    {
      id: 36,
      name: "100mA (X-Ray Machine)",
      category: "adonis-medical",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      inStock: true,
      description: "Professional X-ray imaging system",
    },
    {
      id: 37,
      name: "300mA (X-Ray Machine)",
      category: "adonis-medical",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      inStock: true,
      description: "High-capacity X-ray system",
    },
    {
      id: 38,
      name: "500mA (X-Ray Machine)",
      category: "adonis-medical",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      inStock: true,
      description: "Premium X-ray imaging system",
    },
    {
      id: 39,
      name: "800mA (X-Ray Machine)",
      category: "adonis-medical",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      inStock: true,
      description: "High-end X-ray imaging system",
    },
    {
      id: 40,
      name: "C-Arm with 1K x 1K Mobile Surgical (C-ARM Machines)",
      category: "adonis-medical",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      inStock: true,
      description: "Mobile surgical C-arm with high resolution",
    },
    {
      id: 41,
      name: "C-Arm High Frequency (C-ARM Machines)",
      category: "adonis-medical",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      inStock: true,
      description: "High-frequency C-arm surgical imaging",
    },
    {
      id: 42,
      name: "C-Arm Rotating Anode (C-ARM Machines)",
      category: "adonis-medical",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      inStock: true,
      description: "C-arm with rotating anode technology",
    },
    {
      id: 43,
      name: "Flat Panel Digital X-Ray",
      category: "adonis-medical",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      inStock: true,
      description: "Digital flat panel X-ray system",
    },

    // COVID 19
    {
      id: 44,
      name: "COVID 19 Testing AI Software (ESDS Software)",
      category: "covid-19",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop",
      inStock: true,
      description: "AI-powered COVID testing solution",
    },
    {
      id: 45,
      name: "AA+ Covid 19 Testing Solution (ESDS Software)",
      category: "covid-19",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop",
      inStock: true,
      description: "Advanced COVID testing platform",
    },
    {
      id: 46,
      name: "Self Check Kiosk Solution (KIOSK)",
      category: "covid-19",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop",
      inStock: true,
      description: "Automated health screening kiosk",
    },
    {
      id: 47,
      name: "KLEANTUBE Smart Solution (KIOSK)",
      category: "covid-19",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop",
      inStock: true,
      description: "Smart disinfection tunnel solution",
    },
    {
      id: 48,
      name: "Handy Standy Solution (WESAFETECH)",
      category: "covid-19",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop",
      inStock: true,
      description: "Portable sanitizer stand",
    },
    {
      id: 49,
      name: "Healthy Standee Solution (WESAFETECH)",
      category: "covid-19",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop",
      inStock: true,
      description: "Health monitoring standee",
    },
    {
      id: 50,
      name: "UV Disinfection System (WESAFETECH)",
      category: "covid-19",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop",
      inStock: true,
      description: "Professional UV disinfection solution",
    },
    {
      id: 51,
      name: "Well Safe HVAC Air Refinement (WESAFETECH)",
      category: "covid-19",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop",
      inStock: true,
      description: "HVAC air purification system",
    },
    {
      id: 52,
      name: "Well Safe Robot Tech (WESAFETECH)",
      category: "covid-19",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop",
      inStock: true,
      description: "Automated disinfection robot",
    },
    {
      id: 53,
      name: "Well Safe Tech App (WESAFETECH)",
      category: "covid-19",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop",
      inStock: true,
      description: "Health monitoring mobile application",
    },
    {
      id: 54,
      name: "AIRLENS Car Air Sanitizer (AIRLENS)",
      category: "covid-19",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop",
      inStock: true,
      description: "Car air sanitization system",
    },
    {
      id: 55,
      name: "Airlens N99 Level Masks (AIRLENS)",
      category: "covid-19",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop",
      inStock: true,
      description: "High-protection N99 face masks",
    },

    // Unified Communications
    {
      id: 56,
      name: "OpenScape Business",
      category: "unified-communications",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      inStock: true,
      description: "Complete business communication solution",
    },
    {
      id: 57,
      name: "OpenScape 4000",
      category: "unified-communications",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      inStock: true,
      description: "Enterprise communication platform",
    },
    {
      id: 58,
      name: "OpenScape Voice",
      category: "unified-communications",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      inStock: true,
      description: "Voice communication system",
    },
    {
      id: 59,
      name: "OpenStage Desktop Phones",
      category: "unified-communications",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      inStock: true,
      description: "Professional desktop telephone system",
    },
    {
      id: 60,
      name: "OpenScape Deskphone",
      category: "unified-communications",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      inStock: true,
      description: "Modern desk phone solution",
    },
    {
      id: 61,
      name: "WLAN and Cordless Phones",
      category: "unified-communications",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      inStock: true,
      description: "Wireless communication devices",
    },
    {
      id: 62,
      name: "Soft Client",
      category: "unified-communications",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      inStock: true,
      description: "Software-based communication client",
    },
    {
      id: 63,
      name: "Mobile Clients",
      category: "unified-communications",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      inStock: true,
      description: "Mobile communication applications",
    },
    {
      id: 64,
      name: "OpenScape Xpert",
      category: "unified-communications",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      inStock: true,
      description: "Expert communication management",
    },
    {
      id: 65,
      name: "OpenScape UC",
      category: "unified-communications",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      inStock: true,
      description: "Unified communication application",
    },
    {
      id: 66,
      name: "OpenScape Xpressions",
      category: "unified-communications",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      inStock: true,
      description: "Unified messaging application",
    },
    {
      id: 67,
      name: "OpenScape Web Collaboration",
      category: "unified-communications",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      inStock: true,
      description: "Web-based collaboration platform",
    },
    {
      id: 68,
      name: "OpenScape Contact Center",
      category: "unified-communications",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      inStock: true,
      description: "Complete contact center solution",
    },

    // HP Series(EPABX)
    {
      id: 69,
      name: "HP-110 EPABX System",
      category: "hp-seriesepabx",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      inStock: true,
      description: "Entry-level EPABX communication system",
    },
    {
      id: 70,
      name: "HP-308 EPABX System",
      category: "hp-seriesepabx",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      inStock: true,
      description: "Mid-range EPABX system for businesses",
    },
    {
      id: 71,
      name: "HP-308H Key Telephone System",
      category: "hp-seriesepabx",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      inStock: true,
      description: "Key telephone system with advanced features",
    },
    {
      id: 72,
      name: "Keyphone K-308H",
      category: "hp-seriesepabx",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      inStock: true,
      description: "Key phone compatible with HP-308H",
    },
    {
      id: 73,
      name: "HP-120 Key Telephone System",
      category: "hp-seriesepabx",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      inStock: true,
      description: "Compact key telephone system",
    },
    {
      id: 74,
      name: "Key Phone 3150",
      category: "hp-seriesepabx",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      inStock: true,
      description: "Professional key phone device",
    },
    {
      id: 75,
      name: "HP-150 Communication System",
      category: "hp-seriesepabx",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      inStock: true,
      description: "Advanced communication system",
    },
    {
      id: 76,
      name: "HP-190 Communication System",
      category: "hp-seriesepabx",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      inStock: true,
      description: "Professional communication platform",
    },
    {
      id: 77,
      name: "HP-256 IP Communication System",
      category: "hp-seriesepabx",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      inStock: true,
      description: "IP-based communication system",
    },
    {
      id: 78,
      name: "HP-256 Communication System",
      category: "hp-seriesepabx",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      inStock: true,
      description: "Enterprise communication system",
    },
    {
      id: 79,
      name: "Digital Phones 8150/8180/8230",
      category: "hp-seriesepabx",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      inStock: true,
      description: "Digital phones for HP systems",
    },
    {
      id: 80,
      name: "HP-1000 Communication System",
      category: "hp-seriesepabx",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      inStock: true,
      description: "Enterprise-grade communication system",
    },
    {
      id: 81,
      name: "HP-R Recording Solution",
      category: "hp-seriesepabx",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      inStock: true,
      description: "Call recording and monitoring solution",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === "all" || product.category === category;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-stellar-800 mb-2">
            {categoryNames[category as keyof typeof categoryNames] ||
              "Products"}
          </h1>
          <p className="text-stellar-600">
            {sortedProducts.length} products found
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm border border-stellar-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stellar-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-stellar-200 focus:border-stellar-500"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-stellar-600" />
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] border-stellar-200">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-white border-stellar-200">
                  <SelectItem value="name">Name A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-all duration-300 border-stellar-200"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={product.inStock ? "default" : "destructive"}
                      className={
                        product.inStock
                          ? "bg-stellar-600 hover:bg-stellar-700"
                          : ""
                      }
                    >
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-stellar-800 mb-2 group-hover:text-stellar-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-stellar-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                </CardContent>

                <CardFooter className="p-4 pt-0 flex gap-2">
                  <Link to={`/product/${product.id}`} className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-stellar-300 text-stellar-700 hover:bg-stellar-50 text-sm"
                    >
                      View Details
                    </Button>
                  </Link>
                  <Link to="/chat" className="flex-1">
                    <Button
                      className="w-full bg-stellar-600 hover:bg-stellar-700 text-white text-sm"
                      disabled={!product.inStock}
                    >
                      Contact
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-stellar-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-stellar-600 mb-2">
              No products found
            </h3>
            <p className="text-stellar-500">
              Try adjusting your search criteria
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CategoryListing;
