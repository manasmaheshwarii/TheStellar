import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MessageCircle, Phone, Download } from "lucide-react";

// // src/components/ProductDetail.tsx

// const productPdfMap: Record<string, string> = {

// };

const ProductDetail = () => {
  const { id } = useParams();

  // Map product names to their specific PDF files
  const productPdfMap: Record<string, string> = {
    // EPABX
    "HP-110 EPABX System": "HP-110-Data-Sheet.pdf",
    "HP-120 Key Telephone System": "HP-120-Key-Telephone-System-Data-Sheet.pdf",
    "HP-150 Communication System": "HP-150-Data-Sheet.pdf",
    "HP-190 Communication System": "HP-190-Data-Sheet.pdf",
    "HP-256 IP Communication System": "HP-256-IP-Data-Sheet.pdf",
    "HP-1000 Communication System": "HP-1000-Datasheet.pdf",
    "HP-R Recording Solution": "HP-R-Recording-System-Data-Sheet.pdf",
    // PhotoCopiers not done all
    "A3 Monochrome MFP(Photocopier)": "AR-6020DV_BRO.pdf",
    "AR-6020NV": "AR-6020NV.pdf",
    "AR-6020V": "AR-6020V.pdf",
    "MX-3560_3060V_BRO_RV3": "MX-3560_3060V_BRO_RV3.pdf",
    "MX-4070V_BRO": "MX-4070V_BRO.pdf",
    "MX-6051-5051-4051-3551-3051-2651": "MX-6051-5051-4051-3551-3051-2651.pdf",
    "MX-B450P-B350P": "MX-B450P-B350P.pdf",
    // Printers done
    "Epson Workforce Pro WF-M5799(Printer)": "Epson WF-M5799.pdf",
    "Epson Workforce Pro WF-C5790(Printer)": "Epson WF-C5790.pdf",
    "Epson Workforce Enterprise WF-C20590 (Printer)": "WF-C20590-Brochure.pdf",
    // Unified Communications
    "OpenSacpe-Desk-Phone-IP35G-ECO-Datasheet":
      "OpenSacpe-Desk-Phone-IP35G-ECO-Datasheet.pdf", // not done
    "OpenSacpe-Personal-Edition-Datasheet":
      "OpenSacpe-Personal-Edition-Datasheet.pdf", // not done
    "OpenScape 4000": "OpenScape-4000-Datasheet.pdf",
    "OpenScape Business": "OpenScape-Business-Datasheet.pdf",
    "OpenScape-Dect-Handsets-Datasheet":
      "OpenScape-Dect-Handsets-Datasheet.pdf", // not done
    "OpenScape Deskphone": "OpenScape-Desk-Phone-Datasheet.pdf",
    "OpenScape UC": "OpenScape-UC-Application-Enterprise-Edition-Datasheet.pdf",
    "OpenScape-Voice-V9-Datasheet": "OpenScape-Voice-V9-Datasheet.pdf", // not done
    "OpenScape Web Collaboration": "OpenScape-Web-Collaboration-Datasheet.pdf",
    "OpenScape Xpert": "OpenScape-Xpert-Datasheet.pdf",
    "OpenScape Xpressions": "OpenScape-Xpressions-Datasheet.pdf",
    "OpenStage-T-Datasheet": "OpenStage-T-Datasheet.pdf", // not done
    "OpenStage-WL3-Datasheet": "OpenStage-WL3-Datasheet.pdf",
    // "A4 Monochrome (Photocopier)": "MX-B450P-B350P.pdf",
    // "A4 Monochrome MFP (Photocopier)": "MX-B450P-B350P.pdf",
    // "A3 Monochrome MFP(Photocopier)": "AR-6020DV_BRO.pdf",
    // "A3 Colour(Photocopier)": "MX-3560_3060V_BRO_RV3.pdf",
    // "A3 Business Color MFP(Photocopier)": "MX-4070V_BRO.pdf",
    // "A3 Business advanced colour MFP(Photocopier)":
    //   "MX-6051-5051-4051-3551-3051-2651.pdf",
    // "Epson Workforce Enterprise WF-C20590 (Printer)": "WF-C20590-Brochure.pdf",
    // "Epson Workforce Pro WF-C5790(Printer)": "Epson-WF-C5790.pdf",
    // "Epson Workforce Pro WF-M5799(Printer)": "Epson-WF-M5799.pdf",
  };

  // Function to handle PDF download
  const handlePdfDownload = (productName: string) => {
    const pdfFileName = productPdfMap[productName];
    if (pdfFileName) {
      const link = document.createElement("a");
      link.href = `/pdfs/${pdfFileName}`;
      link.download = pdfFileName;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Function to check if product has PDF
  const hasProductPdf = (productName: string) => {
    return productPdfMap.hasOwnProperty(productName);
  };

  // Comprehensive product database with detailed information for ALL products
  const productsDatabase = {
    // Office Automation Products
    1: {
      id: 1,
      name: "A4 Monochrome (Photocopier)",
      category: "Office Automation",
      image:
        "https://thestellar.in/images3/Nano_Printer_JPEG_MX_B450P_front.jpg",
      inStock: true,

      description:
        "Professional A4 monochrome photocopier with smooth print functionality and wireless support. Perfect for small to medium businesses requiring reliable document production.",
      features: [
        "Wireless printing support",
        "High-speed monochrome printing",
        "Energy-efficient operation",
        "Compact desktop design",
        "Easy maintenance",
        "Mobile printing compatibility",
      ],
      specifications: {
        "Print Speed": "25 pages per minute",
        "Paper Size": "A4, Letter, Legal",
        Memory: "512 MB",
        Connectivity: "Wi-Fi, USB, Ethernet",
        "Monthly Duty Cycle": "50,000 pages",
        Warranty: "1 year",
      },
    },
    2: {
      id: 2,
      name: "A4 Monochrome MFP (Photocopier)",
      category: "Office Automation",
      image:
        "https://thestellar.in/images3/Nano_MFP_Asia_JPEG_MX_B350F_front.jpg",
      inStock: true,
      description:
        "Expandable document production multifunction printer designed for growing workgroups. Combines printing, scanning, copying, and faxing capabilities.",
      features: [
        "4-in-1 functionality (Print, Scan, Copy, Fax)",
        "Automatic document feeder",
        "Duplex printing",
        "Network connectivity",
        "Secure printing",
        "Mobile device support",
      ],
      specifications: {
        "Print Speed": "30 pages per minute",
        "Scan Resolution": "1200 x 1200 dpi",
        "Paper Capacity": "500 sheets",
        "ADF Capacity": "50 sheets",
        Memory: "1 GB",
        Warranty: "2 years",
      },
    },
    3: {
      id: 3,
      name: "A3 Monochrome MFP(Photocopier)",
      category: "Office Automation",
      image: "https://thestellar.in/images1/AR_6023DV_slant.jpg",
      inStock: true,
      description:
        "Large format A3 monochrome multifunction printer with advanced features for high-volume document processing and professional output quality.",
      features: [
        "A3 paper size support",
        "High-volume printing capacity",
        "Advanced scanning features",
        "Network security protocols",
        "Touch screen interface",
        "Professional finishing options",
      ],
      specifications: {
        "Print Speed": "40 pages per minute",
        "Max Paper Size": "A3, Ledger",
        Memory: "2 GB",
        "Paper Capacity": "1,200 sheets",
        "Monthly Duty Cycle": "100,000 pages",
        Warranty: "2 years",
      },
    },
    4: {
      id: 4,
      name: "A3 Colour(Photocopier)",
      category: "Office Automation",
      image: "https://thestellar.in/images3/MX_2651_LSITING_PAGE.jpg",
      inStock: true,
      description:
        "Professional A3 color multifunction printer for business environments requiring high-quality color document production and versatile media handling.",
      features: [
        "Full-color printing and copying",
        "A3 document handling",
        "Professional color accuracy",
        "Versatile media support",
        "Advanced workflow features",
        "Energy-saving technology",
      ],
      specifications: {
        "Print Speed": "35 ppm color/40 ppm mono",
        "Color Technology": "LED technology",
        Memory: "3 GB",
        "Paper Capacity": "1,500 sheets",
        "Monthly Duty Cycle": "120,000 pages",
        Warranty: "3 years",
      },
    },
    5: {
      id: 5,
      name: "A3 Business Color MFP(Photocopier)",
      category: "Office Automation",
      image: "https://thestellar.in/images3/MX_3560V_FN29_slant.jpg",
      inStock: true,
      description:
        "Advanced A3 color multifunction printer with enhanced features for demanding business environments requiring professional-grade color output.",
      features: [
        "Enhanced color management",
        "Advanced security features",
        "High-capacity paper handling",
        "Professional finishing options",
        "Cloud connectivity",
        "Mobile printing solutions",
      ],
      specifications: {
        "Print Speed": "45 ppm color/50 ppm mono",
        "Color Depth": "1200 x 1200 dpi",
        Memory: "4 GB",
        "Hard Drive": "320 GB",
        "Paper Capacity": "2,300 sheets",
        Warranty: "3 years",
      },
    },
    6: {
      id: 6,
      name: "A3 Business advanced colour MFP(Photocopier)",
      category: "Office Automation",
      image: "https://thestellar.in/images3/MX_4070V_FN31_full_front.jpg",
      inStock: true,
      description:
        "High-performance enterprise printer with cutting-edge technology for mission-critical business applications and professional document workflows.",
      features: [
        "Enterprise-grade performance",
        "Advanced color calibration",
        "Automated workflow solutions",
        "Enhanced security protocols",
        "High-speed processing",
        "Professional media handling",
      ],
      specifications: {
        "Print Speed": "60 ppm color/70 ppm mono",
        Processor: "Dual-core 1.2 GHz",
        Memory: "6 GB",
        "Hard Drive": "500 GB SSD",
        "Paper Capacity": "3,000 sheets",
        Warranty: "5 years",
      },
    },
    7: {
      id: 7,
      name: "Epson Workforce Enterprise WF-C20590 (Printer)",
      category: "Office Automation",
      image: "https://thestellar.in/images2/WF-C20590_01_2-1.jpg",
      inStock: true,
      description:
        "Professional workforce printer designed for high-volume business printing with cost-effective operation and reliable performance.",
      features: [
        "Heat-free printing technology",
        "High-capacity ink cartridges",
        "Fast first page out",
        "Energy-efficient operation",
        "Professional print quality",
        "Network-ready connectivity",
      ],
      specifications: {
        "Print Speed": "24 ppm",
        Technology: "PrecisionCore Heat-Free",
        Connectivity: "Ethernet, Wi-Fi, USB",
        "Paper Capacity": "330 sheets",
        "Monthly Duty Cycle": "45,000 pages",
        Warranty: "2 years",
      },
    },
    8: {
      id: 8,
      name: "Epson Workforce Pro WF-C5790(Printer)",
      category: "Office Automation",
      image: "https://thestellar.in/images2/WF-C5790_01-1.png",
      inStock: true,
      stockCount: 8,
      description:
        "Monochrome professional printer optimized for business environments requiring fast, reliable, and cost-effective document printing.",
      features: [
        "Monochrome business printing",
        "Fast print speeds",
        "Low operating costs",
        "Professional output quality",
        "Compact design",
        "Easy maintenance",
      ],
      specifications: {
        "Print Speed": "34 ppm",
        Technology: "PrecisionCore",
        "First Page Out": "5.5 seconds",
        "Paper Capacity": "330 sheets",
        Connectivity: "USB, Ethernet, Wi-Fi",
        Warranty: "1 year",
      },
    },
    9: {
      id: 9,
      name: "Epson Workforce Pro WF-M5799(Printer)",
      category: "Office Automation",
      image: "https://thestellar.in/images2/wf-m5799_hero-paper_690x460.jpg",
      inStock: true,
      description:
        "Reliable monochrome business printer with multifunction capabilities for small to medium-sized offices requiring efficient document processing.",
      features: [
        "Multifunction capabilities",
        "Monochrome printing excellence",
        "Automatic document feeder",
        "Network connectivity",
        "Cost-effective operation",
        "Compact footprint",
      ],
      specifications: {
        "Print Speed": "32 ppm",
        "Scan Resolution": "1200 x 2400 dpi",
        "ADF Capacity": "35 sheets",
        "Paper Capacity": "250 sheets",
        Memory: "256 MB",
        Warranty: "1 year",
      },
    },

    // Visual Solution Products
    10: {
      id: 10,
      name: "PN-Y436",
      category: "Visual Solution",
      price: "₹4,200",
      originalPrice: "₹4,800",
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 6,
      description:
        "High-resolution display system designed for professional presentations and interactive collaboration in modern business environments.",
      features: [
        "43-inch 4K display",
        "Touch-enabled interface",
        "Multi-point touch support",
        "Built-in collaboration tools",
        "Wireless screen sharing",
        "Professional mounting options",
      ],
      specifications: {
        "Screen Size": "43 inches",
        Resolution: "3840 x 2160 (4K)",
        "Touch Points": "20-point multi-touch",
        Connectivity: "HDMI, USB-C, Wi-Fi",
        Brightness: "400 cd/m²",
        Warranty: "3 years",
      },
    },
    11: {
      id: 11,
      name: "PN-Q801",
      category: "Visual Solution",
      price: "₹2,800",
      originalPrice: "₹3,200",
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 8,
      description:
        "Advanced visual communication solution with enterprise-grade features for boardrooms and conference facilities.",
      features: [
        "80-inch large format display",
        "4K Ultra HD resolution",
        "Professional calibration",
        "Multiple input options",
        "Remote management",
        "Energy-efficient LED backlight",
      ],
      specifications: {
        "Screen Size": "80 inches",
        Resolution: "3840 x 2160",
        "Display Type": "LED backlit LCD",
        "Viewing Angle": "178° horizontal/vertical",
        Brightness: "500 cd/m²",
        Warranty: "2 years",
      },
    },
    12: {
      id: 12,
      name: "PN_V550A",
      category: "Visual Solution",
      price: "₹5,500",
      originalPrice: "₹6,200",
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 4,
      description:
        "Interactive touch display for presentations with advanced collaboration features and professional-grade performance for demanding environments.",
      features: [
        "55-inch interactive display",
        "Precision touch technology",
        "Built-in Android system",
        "Wireless presentation",
        "Advanced annotation tools",
        "Multi-device connectivity",
      ],
      specifications: {
        "Screen Size": "55 inches",
        "Touch Technology": "Infrared multi-touch",
        "Operating System": "Android 8.0",
        RAM: "3 GB",
        Storage: "32 GB",
        Warranty: "3 years",
      },
    },
    13: {
      id: 13,
      name: "PN-80TC3",
      category: "Visual Solution",
      price: "₹3,200",
      originalPrice: "₹3,700",
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 5,
      description:
        "Compact touch display solution optimized for small meeting rooms and collaborative spaces requiring reliable interactive functionality.",
      features: [
        "Compact 32-inch display",
        "Touch-enabled interaction",
        "Plug-and-play setup",
        "Multiple connectivity options",
        "Energy-efficient design",
        "Wall-mount compatibility",
      ],
      specifications: {
        "Screen Size": "32 inches",
        Resolution: "1920 x 1080 (Full HD)",
        "Touch Points": "10-point touch",
        "Response Time": "8ms",
        Connectivity: "HDMI, VGA, USB",
        Warranty: "2 years",
      },
    },
    14: {
      id: 14,
      name: "PN-40TC1",
      category: "Visual Solution",
      price: "₹4,800",
      originalPrice: "₹5,400",
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 3,
      description:
        "Professional grade display system with advanced features for high-end presentation environments and executive meeting spaces.",
      features: [
        "40-inch professional display",
        "Superior color accuracy",
        "Advanced touch sensitivity",
        "Professional calibration",
        "Enterprise management",
        "Premium build quality",
      ],
      specifications: {
        "Screen Size": "40 inches",
        Resolution: "3840 x 2160 (4K)",
        "Color Gamut": "100% sRGB",
        "Touch Accuracy": "±1mm",
        Brightness: "450 cd/m²",
        Warranty: "3 years",
      },
    },
    15: {
      id: 15,
      name: "PN-70TW3A",
      category: "Visual Solution",
      price: "₹4,800",
      originalPrice: "₹5,500",
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 2,
      description:
        "Professional grade display system designed for large conference rooms and auditoriums requiring exceptional visual clarity and reliability.",
      features: [
        "70-inch large format display",
        "Professional presentation features",
        "Advanced connectivity suite",
        "Remote monitoring capabilities",
        "Enterprise-grade reliability",
        "Professional installation",
      ],
      specifications: {
        "Screen Size": "70 inches",
        Resolution: "3840 x 2160 (4K)",
        Brightness: "500 cd/m²",
        "Contrast Ratio": "1200:1",
        "Operating Hours": "50,000 hours",
        Warranty: "3 years",
      },
    },

    // Purifiers
    16: {
      id: 16,
      name: "FP-J80M-H (Home Purifier)",
      category: "Purifiers",
      price: "₹450",
      originalPrice: "₹520",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 12,
      description:
        "Advanced home air purification system with HEPA filtration technology. Removes 99.97% of airborne particles including dust, pollen, and allergens.",
      features: [
        "True HEPA filtration",
        "Activated carbon filter",
        "Smart air quality monitoring",
        "Quiet operation",
        "Energy efficient",
        "Remote control included",
      ],
      specifications: {
        "Room Coverage": "Up to 400 sq ft",
        "CADR Rating": "300 CFM",
        "Filter Life": "12 months",
        "Noise Level": "< 40 dB",
        "Power Consumption": "45W",
        Warranty: "3 years",
      },
    },
    17: {
      id: 17,
      name: "FP-J40M-W (Home Purifier)",
      category: "Purifiers",
      price: "₹320",
      originalPrice: "₹380",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 15,
      description:
        "Compact home air purifier perfect for bedrooms and small spaces. Features efficient filtration with ultra-quiet operation for undisturbed sleep.",
      features: [
        "Compact design",
        "Ultra-quiet operation",
        "HEPA filtration",
        "Sleep mode",
        "Auto mode with sensors",
        "Filter replacement indicator",
      ],
      specifications: {
        "Room Coverage": "Up to 250 sq ft",
        "CADR Rating": "180 CFM",
        "Filter Life": "10 months",
        "Noise Level": "< 25 dB",
        "Power Consumption": "25W",
        Warranty: "2 years",
      },
    },
    18: {
      id: 18,
      name: "FP-J60M-W (Home Purifier)",
      category: "Purifiers",
      price: "₹380",
      originalPrice: "₹450",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 10,
      description:
        "Mid-range home air purification system balancing performance and efficiency for medium-sized rooms and living spaces.",
      features: [
        "Medium room coverage",
        "Multi-stage filtration",
        "Air quality indicator",
        "Timer function",
        "Multiple fan speeds",
        "Energy Star certified",
      ],
      specifications: {
        "Room Coverage": "Up to 320 sq ft",
        "CADR Rating": "240 CFM",
        "Filter Life": "11 months",
        "Noise Level": "< 35 dB",
        "Power Consumption": "35W",
        Warranty: "2 years",
      },
    },
    19: {
      id: 19,
      name: "FU-A28E-W (Home Purifier)",
      category: "Purifiers",
      price: "₹280",
      originalPrice: "₹340",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 18,
      description:
        "Entry-level home air purifier offering essential air cleaning features at an affordable price point for budget-conscious consumers.",
      features: [
        "Affordable air purification",
        "Basic HEPA filtration",
        "Simple operation",
        "Compact footprint",
        "Low maintenance",
        "Manual controls",
      ],
      specifications: {
        "Room Coverage": "Up to 200 sq ft",
        "CADR Rating": "120 CFM",
        "Filter Life": "8 months",
        "Noise Level": "< 45 dB",
        "Power Consumption": "20W",
        Warranty: "1 year",
      },
    },
    20: {
      id: 20,
      name: "FP-JC2M-B (Car Purifier)",
      category: "Purifiers",
      price: "₹150",
      originalPrice: "₹180",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 25,
      description:
        "Portable car air purification system designed to eliminate odors, allergens, and pollutants in vehicle interiors for cleaner cabin air.",
      features: [
        "Portable car design",
        "12V DC power",
        "Compact size",
        "Easy installation",
        "Odor elimination",
        "Silent operation",
      ],
      specifications: {
        Coverage: "Car interior",
        "Power Source": "12V DC adapter",
        Dimensions: "6 x 3 x 2 inches",
        Weight: "0.8 lbs",
        "Filter Life": "6 months",
        Warranty: "1 year",
      },
    },
    21: {
      id: 21,
      name: "IG-GC2E (Car Purifier)",
      category: "Purifiers",
      price: "₹180",
      originalPrice: "₹220",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 20,
      description:
        "Premium car air purifier with elegant Black/Gold design featuring advanced ion generation technology for superior air purification.",
      features: [
        "Ion generation technology",
        "Premium Black/Gold design",
        "Advanced purification",
        "Elegant aesthetics",
        "Easy mounting",
        "Low power consumption",
      ],
      specifications: {
        Technology: "Plasmacluster Ion",
        "Ion Density": "25,000 ions/cm³",
        "Power Source": "USB/12V",
        Dimensions: "7 x 2 x 1.5 inches",
        Weight: "0.5 lbs",
        Warranty: "2 years",
      },
    },
    22: {
      id: 22,
      name: "IG-DC2E-B (Car Purifier)",
      category: "Purifiers",
      price: "₹160",
      originalPrice: "₹190",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 22,
      description:
        "Compact car air purification device with efficient performance and sleek design for modern vehicle interiors requiring clean air solutions.",
      features: [
        "Compact design",
        "Efficient purification",
        "Modern aesthetics",
        "Quick installation",
        "Maintenance-free operation",
        "Universal compatibility",
      ],
      specifications: {
        Technology: "Ion generation",
        Coverage: "Up to 50 cubic feet",
        Power: "USB powered",
        Dimensions: "5 x 2 x 1 inches",
        Weight: "0.3 lbs",
        Warranty: "1 year",
      },
    },

    // Allans Medical
    23: {
      id: 23,
      name: "Portable X-Ray Machine 30mA (Machines)",
      category: "Allans Medical",
      price: "₹25,000",
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 3,
      description:
        "Portable X-ray imaging system designed for mobile healthcare applications. Lightweight design with professional imaging capabilities for clinics and field use.",
      features: [
        "Portable and lightweight design",
        "High-frequency generator",
        "Digital imaging compatibility",
        "Battery operation",
        "Easy setup and operation",
        "DICOM compliant",
      ],
      specifications: {
        Output: "30 mA",
        "kVp Range": "40-100 kVp",
        "Generator Type": "High frequency",
        Weight: "18 kg",
        "Battery Life": "200 exposures",
        Warranty: "2 years",
      },
    },
    24: {
      id: 24,
      name: "Portable X-Ray Machine 50mA(Machines)",
      category: "Allans Medical",
      price: "₹32,000",
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 2,
      description:
        "High-capacity portable X-ray system with enhanced power output for versatile medical imaging applications in various healthcare settings.",
      features: [
        "50mA high-capacity output",
        "Enhanced imaging capabilities",
        "Mobile cart included",
        "Digital radiography ready",
        "Advanced safety features",
        "Professional image quality",
      ],
      specifications: {
        Output: "50 mA",
        "kVp Range": "40-110 kVp",
        "Generator Type": "High frequency inverter",
        Weight: "22 kg",
        "Battery Life": "150 exposures",
        Warranty: "2 years",
      },
    },
    25: {
      id: 25,
      name: "100 MA X-Ray Machine(Machines)",
      category: "Allans Medical",
      price: "₹45,000",
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 2,
      description:
        "High-capacity X-ray imaging system designed for busy medical facilities requiring reliable, high-throughput diagnostic imaging capabilities.",
      features: [
        "100mA high-power output",
        "Fixed installation design",
        "Professional image quality",
        "Advanced exposure control",
        "Digital integration ready",
        "Comprehensive safety systems",
      ],
      specifications: {
        Output: "100 mA",
        "kVp Range": "40-125 kVp",
        "Generator Type": "High frequency",
        Installation: "Fixed mount",
        Cooling: "Air cooled",
        Warranty: "3 years",
      },
    },
    26: {
      id: 26,
      name: "300 MA X-Ray Machine(Machines)",
      category: "Allans Medical",
      price: "₹75,000",
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 1,
      description:
        "Professional grade X-ray system with high-power capabilities for demanding hospital environments requiring advanced diagnostic imaging.",
      features: [
        "300mA professional output",
        "Hospital-grade performance",
        "Advanced imaging protocols",
        "Multi-position capabilities",
        "Digital workflow integration",
        "Comprehensive safety features",
      ],
      specifications: {
        Output: "300 mA",
        "kVp Range": "40-150 kVp",
        "Generator Type": "High frequency inverter",
        "Anode Type": "Rotating anode",
        "Focal Spot": "0.6/1.2 mm",
        Warranty: "3 years",
      },
    },
    27: {
      id: 27,
      name: "500 MA X-Ray Machine(Machines)",
      category: "Allans Medical",
      price: "₹95,000",
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 1,
      description:
        "High-end X-ray imaging system with maximum power output for large hospitals and specialized imaging centers requiring premium capabilities.",
      features: [
        "500mA maximum output",
        "Premium imaging performance",
        "Advanced automation",
        "Multiple imaging modes",
        "Enterprise integration",
        "Professional installation",
      ],
      specifications: {
        Output: "500 mA",
        "kVp Range": "40-150 kVp",
        "Generator Type": "High frequency inverter",
        "Anode Type": "Rotating anode",
        "Heat Capacity": "300 kHU",
        Warranty: "5 years",
      },
    },
    28: {
      id: 28,
      name: "Dental X-Ray Machine(Machines)",
      category: "Allans Medical",
      price: "₹18,000",
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 4,
      description:
        "Specialized dental X-ray system optimized for oral and maxillofacial imaging with precise positioning and minimal radiation exposure.",
      features: [
        "Dental imaging specialization",
        "Precise positioning system",
        "Minimal radiation exposure",
        "Digital sensor compatibility",
        "Ergonomic design",
        "Easy operation",
      ],
      specifications: {
        Output: "7 mA",
        "kVp Range": "60-70 kVp",
        "Exposure Time": "0.1-3.2 seconds",
        "Arm Reach": "180 cm",
        Rotation: "360 degrees",
        Warranty: "2 years",
      },
    },
    29: {
      id: 29,
      name: "Floor Mounted X-Ray Unit(Machines)",
      category: "Allans Medical",
      price: "₹85,000",
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 1,
      description:
        "Floor-mounted X-ray imaging unit designed for permanent installation in hospitals and imaging centers requiring stable, high-performance systems.",
      features: [
        "Floor-mounted stability",
        "Professional installation",
        "High-performance imaging",
        "Multiple positioning options",
        "Advanced control systems",
        "Hospital-grade construction",
      ],
      specifications: {
        Output: "400 mA",
        "kVp Range": "40-150 kVp",
        "Generator Type": "High frequency",
        Installation: "Floor mounted",
        Positioning: "Multi-axis",
        Warranty: "3 years",
      },
    },
    30: {
      id: 30,
      name: "OPG Machine(Machines)",
      category: "Allans Medical",
      price: "₹55,000",
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 2,
      description:
        "Orthopantomogram imaging system for panoramic dental X-rays providing comprehensive oral and maxillofacial diagnostic capabilities.",
      features: [
        "Panoramic dental imaging",
        "Digital sensor technology",
        "Patient positioning aids",
        "Automated exposure control",
        "DICOM compatibility",
        "User-friendly interface",
      ],
      specifications: {
        "Imaging Type": "Panoramic",
        Generator: "High frequency",
        "Image Area": "12 x 6 cm",
        Magnification: "1.3x",
        "Patient Positioning": "Automated",
        Warranty: "3 years",
      },
    },
    31: {
      id: 31,
      name: "ECG Machine (Medical Equipment & ECP Machines)",
      category: "Allans Medical",
      price: "₹8,500",
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 6,
      description:
        "Professional electrocardiogram machine for comprehensive cardiac monitoring and diagnosis with advanced analysis capabilities.",
      features: [
        "12-lead ECG capability",
        "Advanced analysis software",
        "Digital display",
        "Data storage and transfer",
        "Portable design",
        "Battery operation",
      ],
      specifications: {
        Leads: "12-lead system",
        "Sampling Rate": "1000 Hz",
        Display: "8.4-inch color LCD",
        Storage: "10,000 ECGs",
        Connectivity: "USB, Ethernet",
        Warranty: "2 years",
      },
    },
    32: {
      id: 32,
      name: "Computed Radiography System(Medical Equipment & ECP Machines)",
      category: "Allans Medical",
      price: "₹65,000",
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 2,
      description:
        "Digital radiography imaging system providing filmless X-ray processing with superior image quality and workflow efficiency.",
      features: [
        "Digital image processing",
        "Filmless operation",
        "High-resolution imaging",
        "PACS integration",
        "Automated processing",
        "Multiple cassette sizes",
      ],
      specifications: {
        Resolution: "10 lp/mm",
        "Processing Time": "90 seconds",
        "Cassette Sizes": "18x24, 24x30, 35x43 cm",
        Connectivity: "DICOM 3.0",
        Storage: "40 GB",
        Warranty: "3 years",
      },
    },
    33: {
      id: 33,
      name: "C-Arm Machine(Medical Equipment & ECP Machines)",
      category: "Allans Medical",
      price: "₹125,000",
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 1,
      description:
        "Mobile C-arm imaging system for surgical and interventional procedures providing real-time fluoroscopic imaging capabilities.",
      features: [
        "Mobile C-arm design",
        "Real-time fluoroscopy",
        "Digital imaging",
        "Multiple positioning options",
        "Surgical compatibility",
        "Image storage and retrieval",
      ],
      specifications: {
        Output: "100 mA",
        "Image Intensifier": "23 cm",
        Resolution: "2.5 lp/mm",
        "C-arm Rotation": "±110 degrees",
        "Mobile Design": "Yes",
        Warranty: "2 years",
      },
    },
    34: {
      id: 34,
      name: "OPG Machine for Panoramic Radiography(Medical Equipment & ECP Machines)",
      category: "Allans Medical",
      price: "₹60,000",
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 2,
      description:
        "Specialized OPG machine designed for comprehensive panoramic radiography with advanced imaging capabilities and patient comfort features.",
      features: [
        "Advanced panoramic imaging",
        "Enhanced patient comfort",
        "Digital image capture",
        "Automated positioning",
        "High-resolution output",
        "DICOM compliance",
      ],
      specifications: {
        "Imaging Mode": "Panoramic",
        "Generator Type": "High frequency",
        "Image Size": "15 x 6 cm",
        "Patient Positioning": "Automated with laser guides",
        "Exposure Time": "12-18 seconds",
        Warranty: "3 years",
      },
    },
    35: {
      id: 35,
      name: "Ultrasound Machine (Sonography Equipment)",
      category: "Allans Medical",
      price: "₹85,000",
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 2,
      description:
        "Advanced ultrasound imaging system for comprehensive diagnostic sonography with multiple transducers and advanced imaging modes.",
      features: [
        "Multiple imaging modes",
        "Various transducer options",
        "Doppler capabilities",
        "3D/4D imaging",
        "DICOM connectivity",
        "Portable design",
      ],
      specifications: {
        "Imaging Modes": "B-mode, M-mode, Doppler",
        Transducers: "Linear, Convex, Phased Array",
        Display: "19-inch LCD",
        Storage: "500 GB",
        Connectivity: "USB, DICOM",
        Warranty: "3 years",
      },
    },

    // Adonis Medical
    36: {
      id: 36,
      name: "100mA (X-Ray Machine)",
      category: "Adonis Medical",
      price: "₹42,000",
      originalPrice: "₹47,000",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 3,
      description:
        "Professional X-ray imaging system with 100mA output capacity designed for medium-volume medical facilities requiring reliable diagnostic imaging.",
      features: [
        "100mA output capacity",
        "Professional imaging quality",
        "Digital radiography ready",
        "Advanced safety systems",
        "User-friendly interface",
        "Comprehensive warranty",
      ],
      specifications: {
        Output: "100 mA",
        "kVp Range": "40-125 kVp",
        Generator: "High frequency inverter",
        "Anode Type": "Rotating anode",
        "Focal Spot": "0.6/1.2 mm",
        Warranty: "3 years",
      },
    },
    37: {
      id: 37,
      name: "300mA (X-Ray Machine)",
      category: "Adonis Medical",
      price: "₹72,000",
      originalPrice: "₹78,000",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 2,
      description:
        "High-capacity X-ray system with 300mA output for busy hospitals and imaging centers requiring high-throughput diagnostic capabilities.",
      features: [
        "300mA high-capacity output",
        "Hospital-grade performance",
        "Advanced imaging protocols",
        "Multi-positioning capabilities",
        "Digital workflow integration",
        "Professional installation",
      ],
      specifications: {
        Output: "300 mA",
        "kVp Range": "40-150 kVp",
        Generator: "High frequency inverter",
        "Anode Type": "Rotating anode",
        "Heat Capacity": "200 kHU",
        Warranty: "3 years",
      },
    },
    38: {
      id: 38,
      name: "500mA (X-Ray Machine)",
      category: "Adonis Medical",
      price: "₹92,000",
      originalPrice: "₹98,000",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 1,
      description:
        "Premium X-ray imaging system with 500mA output for high-end medical facilities requiring maximum diagnostic imaging performance.",
      features: [
        "500mA premium output",
        "Maximum imaging performance",
        "Advanced automation",
        "Multiple imaging modes",
        "Enterprise connectivity",
        "Extended warranty",
      ],
      specifications: {
        Output: "500 mA",
        "kVp Range": "40-150 kVp",
        Generator: "High frequency inverter",
        "Anode Type": "Rotating anode",
        "Heat Capacity": "300 kHU",
        Warranty: "5 years",
      },
    },
    39: {
      id: 39,
      name: "800mA (X-Ray Machine)",
      category: "Adonis Medical",
      price: "₹115,000",
      originalPrice: "₹125,000",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 1,
      description:
        "High-end X-ray imaging system with 800mA output for specialized medical centers requiring ultimate diagnostic imaging capabilities.",
      features: [
        "800mA ultimate output",
        "Specialized imaging capabilities",
        "Advanced control systems",
        "Professional grade construction",
        "Comprehensive training included",
        "Premium support package",
      ],
      specifications: {
        Output: "800 mA",
        "kVp Range": "40-150 kVp",
        Generator: "High frequency inverter",
        "Anode Type": "Rotating anode",
        "Heat Capacity": "400 kHU",
        Warranty: "5 years",
      },
    },
    40: {
      id: 40,
      name: "C-Arm with 1K x 1K Mobile Surgical (C-ARM Machines)",
      category: "Adonis Medical",
      price: "₹95,000",
      originalPrice: "₹105,000",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 2,
      description:
        "Mobile surgical C-arm with high-resolution 1K x 1K imaging for precise surgical and interventional procedures.",
      features: [
        "1K x 1K high resolution",
        "Mobile surgical design",
        "Real-time fluoroscopy",
        "Precise positioning",
        "Surgical compatibility",
        "Digital image storage",
      ],
      specifications: {
        Resolution: "1024 x 1024",
        "Image Intensifier": "23 cm",
        "C-arm Rotation": "±110 degrees",
        Generator: "High frequency",
        "Mobile Design": "Yes",
        Warranty: "3 years",
      },
    },
    41: {
      id: 41,
      name: "C-Arm High Frequency (C-ARM Machines)",
      category: "Adonis Medical",
      price: "₹85,000",
      originalPrice: "₹92,000",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 2,
      description:
        "High-frequency C-arm surgical imaging system providing superior image quality for surgical and interventional procedures.",
      features: [
        "High-frequency generator",
        "Superior image quality",
        "Surgical imaging specialization",
        "Advanced positioning",
        "Digital image processing",
        "Operating room compatibility",
      ],
      specifications: {
        Generator: "High frequency inverter",
        Output: "100 mA",
        "Image Intensifier": "23 cm",
        "C-arm Rotation": "±110 degrees",
        "Image Storage": "Digital",
        Warranty: "3 years",
      },
    },
    42: {
      id: 42,
      name: "C-Arm Rotating Anode (C-ARM Machines)",
      category: "Adonis Medical",
      price: "₹78,000",
      originalPrice: "₹85,000",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 2,
      description:
        "C-arm with rotating anode technology for enhanced heat dissipation and extended operational capabilities in demanding surgical environments.",
      features: [
        "Rotating anode technology",
        "Enhanced heat dissipation",
        "Extended operational time",
        "Surgical environment optimized",
        "Professional image quality",
        "Reliable performance",
      ],
      specifications: {
        "Anode Type": "Rotating anode",
        "Heat Capacity": "150 kHU",
        Generator: "High frequency",
        "C-arm Rotation": "±110 degrees",
        Cooling: "Forced air",
        Warranty: "3 years",
      },
    },
    43: {
      id: 43,
      name: "Flat Panel Digital X-Ray",
      category: "Adonis Medical",
      price: "₹95,000",
      originalPrice: "₹108,000",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 2,
      description:
        "Digital flat panel X-ray system providing immediate image acquisition with superior image quality and workflow efficiency.",
      features: [
        "Flat panel detector technology",
        "Immediate image acquisition",
        "Superior image quality",
        "DICOM compliance",
        "Workflow optimization",
        "Network connectivity",
      ],
      specifications: {
        "Detector Type": "Flat panel",
        Resolution: "3000 x 3000 pixels",
        "Pixel Size": "143 microns",
        "Image Processing": "Real-time",
        Connectivity: "DICOM 3.0",
        Warranty: "3 years",
      },
    },

    // COVID 19
    44: {
      id: 44,
      name: "COVID 19 Testing AI Software (ESDS Software)",
      category: "COVID 19",
      price: "₹15,000",
      originalPrice: "₹18,000",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 10,
      description:
        "AI-powered COVID testing solution with advanced algorithms for accurate and rapid detection of COVID-19 cases.",
      features: [
        "AI-powered detection",
        "Rapid analysis",
        "High accuracy rates",
        "Integration capabilities",
        "Automated reporting",
        "Cloud-based platform",
      ],
      specifications: {
        "AI Technology": "Machine Learning",
        Accuracy: "95%+",
        "Processing Time": "< 30 seconds",
        Integration: "API available",
        Platform: "Cloud-based",
        Warranty: "1 year",
      },
    },
    45: {
      id: 45,
      name: "AA+ Covid 19 Testing Solution (ESDS Software)",
      category: "COVID 19",
      price: "₹18,000",
      originalPrice: "₹22,000",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 8,
      description:
        "Advanced COVID testing platform with enhanced features for comprehensive testing management and reporting.",
      features: [
        "Advanced testing algorithms",
        "Comprehensive management",
        "Enhanced reporting",
        "Multi-site support",
        "Data analytics",
        "Compliance features",
      ],
      specifications: {
        Platform: "Enterprise grade",
        Accuracy: "97%+",
        Capacity: "Unlimited tests",
        Reporting: "Real-time",
        Compliance: "Healthcare standards",
        Warranty: "2 years",
      },
    },
    46: {
      id: 46,
      name: "Self Check Kiosk Solution (KIOSK)",
      category: "COVID 19",
      price: "₹8,500",
      originalPrice: "₹10,000",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 15,
      description:
        "Automated health screening kiosk for self-service health checks including temperature monitoring and symptom assessment.",
      features: [
        "Automated health screening",
        "Temperature monitoring",
        "Symptom assessment",
        "Touchless operation",
        "Data logging",
        "Alert system",
      ],
      specifications: {
        Display: "21.5-inch touchscreen",
        "Temperature Range": "95°F - 110°F",
        Accuracy: "±0.3°F",
        Power: "110V AC",
        Connectivity: "Wi-Fi, Ethernet",
        Warranty: "2 years",
      },
    },
    47: {
      id: 47,
      name: "KLEANTUBE Smart Solution (KIOSK)",
      category: "COVID 19",
      price: "₹12,000",
      originalPrice: "₹14,500",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 6,
      description:
        "Smart disinfection tunnel solution providing comprehensive sanitization for personnel entering facilities.",
      features: [
        "Smart disinfection tunnel",
        "Comprehensive sanitization",
        "Automated operation",
        "Safety sensors",
        "Usage monitoring",
        "Remote management",
      ],
      specifications: {
        Dimensions: "2m x 1m x 2.5m",
        "Disinfection Time": "10-15 seconds",
        Capacity: "1 person",
        Power: "220V AC",
        Control: "Automated sensors",
        Warranty: "2 years",
      },
    },
    48: {
      id: 48,
      name: "Handy Standy Solution (WESAFETECH)",
      category: "COVID 19",
      price: "₹450",
      originalPrice: "₹550",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 50,
      description:
        "Portable sanitizer stand with automatic dispensing and hands-free operation for public spaces and facilities.",
      features: [
        "Portable design",
        "Automatic dispensing",
        "Hands-free operation",
        "Adjustable height",
        "Large capacity",
        "Battery powered",
      ],
      specifications: {
        Height: "Adjustable 120-150cm",
        Capacity: "1000ml",
        Power: "Rechargeable battery",
        Material: "Stainless steel",
        "Sensor Range": "5-15cm",
        Warranty: "1 year",
      },
    },
    49: {
      id: 49,
      name: "Healthy Standee Solution (WESAFETECH)",
      category: "COVID 19",
      price: "₹650",
      originalPrice: "₹780",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 25,
      description:
        "Health monitoring standee with integrated temperature checking and sanitization features for facility entry points.",
      features: [
        "Integrated health monitoring",
        "Temperature checking",
        "Sanitization features",
        "Digital display",
        "Alert system",
        "Data logging",
      ],
      specifications: {
        Height: "180cm",
        Display: "10-inch LCD",
        "Temperature Range": "95°F - 110°F",
        "Sanitizer Capacity": "500ml",
        Power: "AC powered",
        Warranty: "2 years",
      },
    },
    50: {
      id: 50,
      name: "UV Disinfection System (WESAFETECH)",
      category: "COVID 19",
      price: "₹3,200",
      originalPrice: "₹3,800",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 12,
      description:
        "Professional UV disinfection solution for sterilizing surfaces and air in medical facilities and public spaces.",
      features: [
        "UV-C disinfection technology",
        "Surface and air sterilization",
        "Professional grade",
        "Safety features",
        "Timer controls",
        "Mobile design",
      ],
      specifications: {
        "UV Type": "UV-C 254nm",
        Coverage: "100 sq meters",
        Power: "36W",
        Timer: "1-60 minutes",
        Safety: "Motion sensors",
        Warranty: "3 years",
      },
    },
    51: {
      id: 51,
      name: "Well Safe HVAC Air Refinement (WESAFETECH)",
      category: "COVID 19",
      price: "₹5,500",
      originalPrice: "₹6,500",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 8,
      description:
        "HVAC air purification system with advanced filtration technology for large-scale air quality improvement.",
      features: [
        "HVAC integration",
        "Advanced filtration",
        "Large-scale coverage",
        "Energy efficient",
        "Remote monitoring",
        "Professional installation",
      ],
      specifications: {
        Coverage: "Up to 5000 sq ft",
        Filtration: "HEPA + UV-C",
        Airflow: "2000 CFM",
        Power: "220V AC",
        Control: "Smart controls",
        Warranty: "5 years",
      },
    },
    52: {
      id: 52,
      name: "Well Safe Robot Tech (WESAFETECH)",
      category: "COVID 19",
      price: "₹25,000",
      originalPrice: "₹28,000",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 3,
      description:
        "Automated disinfection robot with UV-C technology and autonomous navigation for comprehensive facility sanitization.",
      features: [
        "Autonomous navigation",
        "UV-C disinfection",
        "Automated operation",
        "Remote monitoring",
        "Safety protocols",
        "Mapping technology",
      ],
      specifications: {
        Navigation: "LIDAR + cameras",
        "UV Power": "4 x 30W UV-C lamps",
        "Battery Life": "4 hours",
        Coverage: "500 sq meters/hour",
        Control: "Mobile app",
        Warranty: "3 years",
      },
    },
    53: {
      id: 53,
      name: "Well Safe Tech App (WESAFETECH)",
      category: "COVID 19",
      price: "₹2,500",
      originalPrice: "₹3,000",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 100,
      description:
        "Health monitoring mobile application for contact tracing, symptom tracking, and health status management.",
      features: [
        "Contact tracing",
        "Symptom tracking",
        "Health status management",
        "Data analytics",
        "Privacy protection",
        "Multi-platform support",
      ],
      specifications: {
        Platform: "iOS, Android, Web",
        Users: "Unlimited",
        Storage: "Cloud-based",
        Privacy: "GDPR compliant",
        Updates: "Regular updates",
        License: "1 year",
      },
    },
    54: {
      id: 54,
      name: "AIRLENS Car Air Sanitizer (AIRLENS)",
      category: "COVID 19",
      price: "₹250",
      originalPrice: "₹300",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 40,
      description:
        "Car air sanitization system using advanced filtration and ionization technology for clean vehicle cabin air.",
      features: [
        "Car-specific design",
        "Advanced filtration",
        "Ionization technology",
        "Easy installation",
        "Low power consumption",
        "Maintenance-free",
      ],
      specifications: {
        Power: "12V DC",
        Filtration: "HEPA + Carbon",
        Coverage: "Car interior",
        Installation: "Plug-and-play",
        Dimensions: "15 x 8 x 5 cm",
        Warranty: "2 years",
      },
    },
    55: {
      id: 55,
      name: "Airlens N99 Level Masks (AIRLENS)",
      category: "COVID 19",
      price: "₹45",
      originalPrice: "₹55",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 500,
      description:
        "High-protection N99 face masks providing superior filtration efficiency against airborne particles and contaminants.",
      features: [
        "N99 filtration efficiency",
        "Superior protection",
        "Comfortable fit",
        "Breathable material",
        "Adjustable straps",
        "Medical grade",
      ],
      specifications: {
        Filtration: "99% efficiency",
        Material: "Non-woven fabric",
        Layers: "5-layer protection",
        Size: "Universal fit",
        Certification: "CE marked",
        Quantity: "Box of 50",
      },
    },

    // Unified Communications
    56: {
      id: 56,
      name: "OpenScape Business",
      category: "Unified Communications",
      price: "₹12,000",
      originalPrice: "₹14,500",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 7,
      description:
        "Complete business communication solution with unified messaging, voice, and collaboration features. Scalable platform for growing businesses.",
      features: [
        "Unified messaging",
        "Voice over IP (VoIP)",
        "Video conferencing",
        "Mobile integration",
        "Call center functionality",
        "Advanced reporting",
      ],
      specifications: {
        "User Capacity": "Up to 500 users",
        "Concurrent Calls": "120 calls",
        Protocols: "SIP, H.323",
        Integration: "Microsoft Teams, Outlook",
        Redundancy: "Hot standby",
        Warranty: "3 years",
      },
    },
    57: {
      id: 57,
      name: "OpenScape 4000",
      category: "Unified Communications",
      price: "₹18,000",
      originalPrice: "₹21,000",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 4,
      description:
        "Enterprise communication platform designed for large organizations requiring advanced unified communications capabilities.",
      features: [
        "Enterprise-grade platform",
        "Advanced UC features",
        "Scalable architecture",
        "High availability",
        "Professional services",
        "Global deployment",
      ],
      specifications: {
        "User Capacity": "Up to 2000 users",
        "Concurrent Calls": "500 calls",
        Availability: "99.99% uptime",
        Deployment: "On-premise/Cloud",
        Integration: "Third-party systems",
        Warranty: "5 years",
      },
    },
    58: {
      id: 58,
      name: "OpenScape Voice",
      category: "Unified Communications",
      price: "₹8,500",
      originalPrice: "₹10,000",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 10,
      description:
        "Voice communication system providing reliable telephony services with advanced call handling and routing capabilities.",
      features: [
        "Reliable telephony services",
        "Advanced call handling",
        "Call routing",
        "Voice mail integration",
        "Conference calling",
        "Call analytics",
      ],
      specifications: {
        Lines: "Up to 200 lines",
        Extensions: "500 extensions",
        Features: "Full PBX features",
        Recording: "Call recording",
        Protocols: "SIP, ISDN",
        Warranty: "3 years",
      },
    },
    59: {
      id: 59,
      name: "OpenStage Desktop Phones",
      category: "Unified Communications",
      price: "₹350",
      originalPrice: "₹420",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 50,
      description:
        "Professional desktop telephone system with advanced features for business communication and productivity enhancement.",
      features: [
        "Professional desktop design",
        "Advanced features",
        "HD voice quality",
        "Color display",
        "Programmable keys",
        "Headset compatibility",
      ],
      specifications: {
        Display: "Color LCD",
        Keys: "12 programmable",
        "Voice Quality": "HD voice",
        Connectivity: "Ethernet",
        Power: "PoE",
        Warranty: "2 years",
      },
    },
    60: {
      id: 60,
      name: "OpenScape Deskphone",
      category: "Unified Communications",
      price: "₹280",
      originalPrice: "₹340",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 75,
      description:
        "Modern desk phone solution with intuitive interface and advanced communication features for efficient business operations.",
      features: [
        "Modern design",
        "Intuitive interface",
        "Advanced communication",
        "Energy efficient",
        "Easy deployment",
        "Cost effective",
      ],
      specifications: {
        Display: "2.8-inch LCD",
        Keys: "8 function keys",
        Audio: "Wideband audio",
        Network: "Gigabit Ethernet",
        Power: "PoE/AC adapter",
        Warranty: "2 years",
      },
    },
    61: {
      id: 61,
      name: "WLAN and Cordless Phones",
      category: "Unified Communications",
      price: "₹420",
      originalPrice: "₹500",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 30,
      description:
        "Wireless communication devices providing mobility and flexibility for modern business environments with seamless connectivity.",
      features: [
        "Wireless connectivity",
        "Mobile flexibility",
        "Seamless handover",
        "Long battery life",
        "Secure encryption",
        "Range extender support",
      ],
      specifications: {
        Technology: "DECT/WiFi",
        Range: "Up to 300m outdoor",
        Battery: "10 hours talk time",
        Handsets: "Up to 8 handsets",
        Encryption: "AES 128-bit",
        Warranty: "2 years",
      },
    },
    62: {
      id: 62,
      name: "Soft Client",
      category: "Unified Communications",
      price: "₹150",
      originalPrice: "₹200",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 200,
      description:
        "Software-based communication client enabling voice, video, and messaging from desktop and laptop computers.",
      features: [
        "Software-based client",
        "Voice and video calling",
        "Instant messaging",
        "Presence status",
        "Contact management",
        "Call control",
      ],
      specifications: {
        Platform: "Windows, Mac, Linux",
        "Codec Support": "G.711, G.729, H.264",
        "Video Quality": "Up to 1080p",
        Messaging: "IM and SMS",
        Integration: "CRM systems",
        License: "Per user",
      },
    },
    63: {
      id: 63,
      name: "Mobile Clients",
      category: "Unified Communications",
      price: "₹120",
      originalPrice: "₹160",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 300,
      description:
        "Mobile communication applications for smartphones and tablets providing full UC features on mobile devices.",
      features: [
        "Mobile app solution",
        "Full UC features",
        "Push notifications",
        "Secure communications",
        "Offline capabilities",
        "Cross-platform support",
      ],
      specifications: {
        Platform: "iOS, Android",
        Features: "Voice, video, IM",
        Security: "End-to-end encryption",
        Offline: "Message sync",
        Updates: "Automatic updates",
        License: "Per device",
      },
    },
    64: {
      id: 64,
      name: "OpenScape Xpert",
      category: "Unified Communications",
      price: "₹2,500",
      originalPrice: "₹3,000",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 15,
      description:
        "Expert communication management system providing advanced analytics and optimization for enterprise communication environments.",
      features: [
        "Expert management system",
        "Advanced analytics",
        "Performance optimization",
        "Monitoring tools",
        "Reporting dashboard",
        "Proactive alerts",
      ],
      specifications: {
        Monitoring: "Real-time",
        Analytics: "Advanced reporting",
        Alerts: "Proactive notifications",
        Dashboard: "Web-based",
        Integration: "SNMP, REST API",
        Warranty: "3 years",
      },
    },
    65: {
      id: 65,
      name: "OpenScape UC",
      category: "Unified Communications",
      price: "₹3,200",
      originalPrice: "₹3,800",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 12,
      description:
        "Unified communication application providing integrated voice, video, messaging, and collaboration in a single platform.",
      features: [
        "Unified communication app",
        "Integrated platform",
        "Voice and video",
        "Collaboration tools",
        "Presence management",
        "File sharing",
      ],
      specifications: {
        Platform: "Windows, Mac, Web",
        "Video Quality": "HD 1080p",
        Participants: "Up to 50",
        "File Sharing": "Integrated",
        Calendar: "Outlook integration",
        License: "Per user/year",
      },
    },
    66: {
      id: 66,
      name: "OpenScape Xpressions",
      category: "Unified Communications",
      price: "₹1,800",
      originalPrice: "₹2,200",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 20,
      description:
        "Unified messaging application providing comprehensive message management across voice, email, and fax communications.",
      features: [
        "Unified messaging",
        "Voice mail management",
        "Email integration",
        "Fax services",
        "Message forwarding",
        "Mobile access",
      ],
      specifications: {
        "Mailbox Size": "Unlimited",
        "Message Types": "Voice, email, fax",
        Access: "Phone, email, web",
        Forwarding: "Multiple destinations",
        Storage: "Centralized",
        Warranty: "2 years",
      },
    },
    67: {
      id: 67,
      name: "OpenScape Web Collaboration",
      category: "Unified Communications",
      price: "₹2,200",
      originalPrice: "₹2,700",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 18,
      description:
        "Web-based collaboration platform enabling online meetings, screen sharing, and document collaboration from any device.",
      features: [
        "Web-based platform",
        "Online meetings",
        "Screen sharing",
        "Document collaboration",
        "Recording capabilities",
        "Mobile support",
      ],
      specifications: {
        Participants: "Up to 100",
        "Screen Share": "HD quality",
        Recording: "Local/cloud",
        "File Share": "Real-time",
        Platform: "Browser-based",
        License: "Per organizer",
      },
    },
    68: {
      id: 68,
      name: "OpenScape Contact Center",
      category: "Unified Communications",
      price: "₹15,000",
      originalPrice: "₹18,000",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 5,
      description:
        "Complete contact center solution providing advanced call routing, agent management, and customer interaction capabilities.",
      features: [
        "Complete contact center",
        "Advanced call routing",
        "Agent management",
        "Customer interactions",
        "Real-time monitoring",
        "Performance analytics",
      ],
      specifications: {
        Agents: "Up to 500",
        Queues: "Unlimited",
        Routing: "Skills-based",
        Reporting: "Real-time",
        Integration: "CRM systems",
        Warranty: "3 years",
      },
    },

    // HP Series(EPABX)
    69: {
      id: 69,
      name: "HP-110 EPABX System",
      category: "HP Series(EPABX)",
      price: "₹2,500",
      originalPrice: "₹2,900",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 8,
      description:
        "Entry-level EPABX communication system perfect for small businesses requiring reliable telephone connectivity and basic features.",
      features: [
        "Entry-level EPABX",
        "Small business focused",
        "Reliable connectivity",
        "Basic PBX features",
        "Easy installation",
        "Cost-effective solution",
      ],
      specifications: {
        Lines: "4 CO lines",
        Extensions: "8 extensions",
        Features: "Call transfer, hold",
        Expansion: "Modular",
        Power: "AC adapter",
        Warranty: "2 years",
      },
    },
    70: {
      id: 70,
      name: "HP-308 EPABX System",
      category: "HP Series(EPABX)",
      price: "₹4,200",
      originalPrice: "₹4,800",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 6,
      description:
        "Mid-range EPABX system for businesses requiring enhanced communication features and expanded capacity.",
      features: [
        "Mid-range system",
        "Enhanced features",
        "Expanded capacity",
        "Digital connectivity",
        "Voice mail ready",
        "Professional grade",
      ],
      specifications: {
        Lines: "8 CO lines",
        Extensions: "24 extensions",
        Features: "Voice mail, conference",
        Display: "LCD display",
        Memory: "Non-volatile",
        Warranty: "3 years",
      },
    },
    71: {
      id: 71,
      name: "HP-308H Key Telephone System",
      category: "HP Series(EPABX)",
      price: "₹3,800",
      originalPrice: "₹4,300",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 5,
      description:
        "Key telephone system with advanced features providing flexible communication solution for growing businesses.",
      features: [
        "Key telephone system",
        "Advanced features",
        "Flexible solution",
        "Multiple line access",
        "Intercom capability",
        "System programming",
      ],
      specifications: {
        Lines: "8 CO lines",
        Stations: "24 stations",
        Features: "Intercom, paging",
        Programming: "Station programming",
        Expansion: "Modular cards",
        Warranty: "2 years",
      },
    },
    72: {
      id: 72,
      name: "Keyphone K-308H",
      category: "HP Series(EPABX)",
      price: "₹450",
      originalPrice: "₹520",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 25,
      description:
        "Key phone compatible with HP-308H system providing professional communication features for individual workstations.",
      features: [
        "HP-308H compatible",
        "Professional features",
        "Individual workstation",
        "Line buttons",
        "Intercom access",
        "Hold function",
      ],
      specifications: {
        Lines: "8 line buttons",
        Features: "Hold, transfer, intercom",
        Display: "2-line LCD",
        Memory: "Speed dial",
        Connection: "Digital",
        Warranty: "1 year",
      },
    },
    73: {
      id: 73,
      name: "HP-120 Key Telephone System",
      category: "HP Series(EPABX)",
      price: "₹2,800",
      originalPrice: "₹3,200",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 7,
      description:
        "Compact key telephone system designed for small offices requiring essential communication features with room for growth.",
      features: [
        "Compact system",
        "Small office design",
        "Essential features",
        "Growth potential",
        "Easy operation",
        "Reliable performance",
      ],
      specifications: {
        Lines: "4 CO lines",
        Stations: "12 stations",
        Features: "Basic PBX",
        Programming: "Simple setup",
        Size: "Compact cabinet",
        Warranty: "2 years",
      },
    },
    74: {
      id: 74,
      name: "Key Phone 3150",
      category: "HP Series(EPABX)",
      price: "₹320",
      originalPrice: "₹380",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 40,
      description:
        "Professional key phone device providing essential business communication features with user-friendly operation.",
      features: [
        "Professional device",
        "Essential features",
        "User-friendly",
        "Durable construction",
        "Cost-effective",
        "Easy maintenance",
      ],
      specifications: {
        Lines: "6 line buttons",
        Features: "Basic functions",
        Display: "Single line",
        Memory: "10 speed dial",
        Type: "Analog",
        Warranty: "1 year",
      },
    },
    75: {
      id: 75,
      name: "HP-150 Communication System",
      category: "HP Series(EPABX)",
      price: "₹6,500",
      originalPrice: "₹7,200",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 4,
      description:
        "Advanced communication system providing comprehensive business telephony with enhanced features and reliability.",
      features: [
        "Advanced system",
        "Comprehensive telephony",
        "Enhanced features",
        "High reliability",
        "Scalable design",
        "Professional installation",
      ],
      specifications: {
        Lines: "16 CO lines",
        Extensions: "64 extensions",
        Features: "Full PBX suite",
        Voicemail: "Integrated",
        Networking: "System networking",
        Warranty: "3 years",
      },
    },
    76: {
      id: 76,
      name: "HP-190 Communication System",
      category: "HP Series(EPABX)",
      price: "₹8,200",
      originalPrice: "₹9,000",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 3,
      description:
        "Professional communication platform designed for medium to large businesses requiring robust telephony infrastructure.",
      features: [
        "Professional platform",
        "Medium-large business",
        "Robust infrastructure",
        "Advanced routing",
        "Management tools",
        "High capacity",
      ],
      specifications: {
        Lines: "24 CO lines",
        Extensions: "96 extensions",
        Features: "Advanced PBX",
        Management: "Web interface",
        Redundancy: "Power backup",
        Warranty: "3 years",
      },
    },
    77: {
      id: 77,
      name: "HP-256 IP Communication System",
      category: "HP Series(EPABX)",
      price: "₹12,500",
      originalPrice: "₹14,000",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 2,
      description:
        "IP-based communication system providing modern VoIP capabilities with traditional telephony reliability.",
      features: [
        "IP-based system",
        "Modern VoIP",
        "Traditional reliability",
        "Network integration",
        "Remote management",
        "Future-ready platform",
      ],
      specifications: {
        Type: "Hybrid IP/TDM",
        "IP Phones": "Unlimited",
        Protocols: "SIP, H.323",
        Management: "Web-based",
        Capacity: "256 ports",
        Warranty: "5 years",
      },
    },
    78: {
      id: 78,
      name: "HP-256 Communication System",
      category: "HP Series(EPABX)",
      price: "₹11,800",
      originalPrice: "₹13,200",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 2,
      description:
        "Enterprise communication system providing maximum capacity and advanced features for large organizations.",
      features: [
        "Enterprise system",
        "Maximum capacity",
        "Advanced features",
        "Large organization",
        "Comprehensive solution",
        "Professional support",
      ],
      specifications: {
        Capacity: "256 ports",
        Lines: "64 CO lines",
        Extensions: "256 extensions",
        Features: "Enterprise grade",
        Redundancy: "Hot standby",
        Warranty: "5 years",
      },
    },
    79: {
      id: 79,
      name: "Digital Phones 8150/8180/8230",
      category: "HP Series(EPABX)",
      price: "₹380",
      originalPrice: "₹450",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 30,
      description:
        "Digital phones for HP systems providing professional communication features with advanced display and functionality.",
      features: [
        "Digital phone series",
        "HP system compatible",
        "Professional features",
        "Advanced display",
        "Multiple models",
        "Ergonomic design",
      ],
      specifications: {
        Models: "8150, 8180, 8230",
        Display: "2-4 line LCD",
        Keys: "8-24 programmable",
        Features: "Full digital",
        Connection: "Digital port",
        Warranty: "2 years",
      },
    },
    80: {
      id: 80,
      name: "HP-1000 Communication System",
      category: "HP Series(EPABX)",
      price: "₹25,000",
      originalPrice: "₹28,000",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 1,
      description:
        "Enterprise-grade communication system designed for large corporations requiring maximum capacity and advanced features.",
      features: [
        "Enterprise-grade system",
        "Large corporations",
        "Maximum capacity",
        "Advanced features",
        "High availability",
        "Professional services",
      ],
      specifications: {
        Capacity: "1000 ports",
        Lines: "120 CO lines",
        Extensions: "1000 extensions",
        Redundancy: "Full redundancy",
        Management: "Centralized",
        Warranty: "5 years",
      },
    },
    81: {
      id: 81,
      name: "HP-R Recording Solution",
      category: "HP Series(EPABX)",
      price: "₹5,500",
      originalPrice: "₹6,200",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 6,
      description:
        "Call recording and monitoring solution providing compliance and quality assurance capabilities for business communications.",
      features: [
        "Call recording",
        "Quality monitoring",
        "Compliance support",
        "Business communications",
        "Automated recording",
        "Secure storage",
      ],
      specifications: {
        Channels: "32 channels",
        Storage: "500 GB",
        Recording: "Automatic/manual",
        Playback: "Web-based",
        Compliance: "Industry standards",
        Warranty: "3 years",
      },
    },

    // Additional Office Automation Products
    82: {
      id: 82,
      name: "A4 Color MFP Photocopier",
      category: "Office Automation",
      price: "₹4,200",
      originalPrice: "₹4,800",
      image:
        "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 6,
      description:
        "Compact A4 color multifunction printer perfect for small offices requiring professional color output with space-saving design.",
      features: [
        "A4 color printing",
        "Compact design",
        "Wireless connectivity",
        "Mobile printing support",
        "Duplex printing",
        "Energy efficient",
      ],
      specifications: {
        "Print Speed": "22 ppm color/25 ppm mono",
        Resolution: "1200 x 1200 dpi",
        "Paper Capacity": "250 sheets",
        Connectivity: "Wi-Fi, USB, Ethernet",
        Memory: "512 MB",
        Warranty: "2 years",
      },
    },
    83: {
      id: 83,
      name: "Desktop Laser Printer",
      category: "Office Automation",
      price: "₹650",
      originalPrice: "₹750",
      image:
        "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 15,
      description:
        "Reliable desktop laser printer for high-volume office printing with fast output and low operating costs.",
      features: [
        "High-speed laser printing",
        "Low cost per page",
        "Compact desktop design",
        "Network connectivity",
        "Automatic duplex",
        "High-yield toner",
      ],
      specifications: {
        "Print Speed": "40 ppm",
        Resolution: "1200 x 1200 dpi",
        "Paper Capacity": "520 sheets",
        "Monthly Duty": "80,000 pages",
        Connectivity: "USB, Ethernet",
        Warranty: "1 year",
      },
    },
    84: {
      id: 84,
      name: "Wide Format Printer",
      category: "Office Automation",
      price: "₹3,500",
      originalPrice: "₹4,000",
      image:
        "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 4,
      description:
        "Professional wide format printer for technical drawings, posters, and large format documents with precision output.",
      features: [
        "Wide format printing",
        "Technical drawing support",
        "High precision output",
        "Multiple media types",
        "Professional color accuracy",
        "CAD/GIS compatibility",
      ],
      specifications: {
        "Max Width": "44 inches",
        Resolution: "2400 x 1200 dpi",
        "Media Types": "Paper, vinyl, canvas",
        Connectivity: "USB, Ethernet, Wi-Fi",
        "Ink System": "6-color",
        Warranty: "2 years",
      },
    },

    // Additional Visual Solution Products
    85: {
      id: 85,
      name: 'Interactive Whiteboard 75"',
      category: "Visual Solution",
      price: "₹6,800",
      originalPrice: "₹7,500",
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 3,
      description:
        "Large interactive whiteboard for classrooms and conference rooms with advanced touch technology and collaboration features.",
      features: [
        "75-inch interactive display",
        "Multi-touch support",
        "4K resolution",
        "Built-in speakers",
        "Annotation software",
        "Wireless screen sharing",
      ],
      specifications: {
        "Screen Size": "75 inches",
        Resolution: "3840 x 2160 (4K)",
        "Touch Points": "20-point multi-touch",
        Brightness: "350 cd/m²",
        "Viewing Angle": "178°",
        Warranty: "3 years",
      },
    },
    86: {
      id: 86,
      name: 'Digital Signage Display 55"',
      category: "Visual Solution",
      price: "₹2,200",
      originalPrice: "₹2,600",
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 8,
      description:
        "Commercial-grade digital signage display for retail and corporate environments with 24/7 operation capability.",
      features: [
        "Commercial-grade panel",
        "24/7 operation rated",
        "Remote content management",
        "High brightness",
        "Portrait/landscape orientation",
        "Built-in media player",
      ],
      specifications: {
        "Screen Size": "55 inches",
        Resolution: "1920 x 1080 (Full HD)",
        Brightness: "700 cd/m²",
        "Operating Hours": "16/7",
        Connectivity: "HDMI, USB, LAN",
        Warranty: "3 years",
      },
    },
    87: {
      id: 87,
      name: "Video Wall Controller",
      category: "Visual Solution",
      price: "₹4,500",
      originalPrice: "₹5,200",
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 5,
      description:
        "Advanced video wall controller for creating seamless multi-display presentations in control rooms and public spaces.",
      features: [
        "Multi-display support",
        "Seamless video walls",
        "Real-time processing",
        "Multiple input sources",
        "Remote management",
        "Scalable configuration",
      ],
      specifications: {
        "Max Displays": "16 displays",
        "Input Sources": "8 HDMI, 4 DVI",
        Resolution: "Up to 4K per input",
        Processing: "Real-time",
        Control: "Web-based interface",
        Warranty: "2 years",
      },
    },

    // Additional Purifier Products
    88: {
      id: 88,
      name: "Industrial Air Purifier",
      category: "Purifiers",
      price: "₹1,200",
      originalPrice: "₹1,400",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 6,
      description:
        "Heavy-duty industrial air purification system for warehouses, factories, and large commercial spaces requiring powerful air cleaning.",
      features: [
        "Industrial-grade filtration",
        "High-capacity airflow",
        "Durable construction",
        "Multi-stage filtration",
        "Remote monitoring",
        "Low maintenance",
      ],
      specifications: {
        Coverage: "Up to 2000 sq ft",
        "CADR Rating": "800 CFM",
        "Filter Stages": "5-stage filtration",
        "Noise Level": "< 55 dB",
        Power: "150W",
        Warranty: "3 years",
      },
    },
    89: {
      id: 89,
      name: "HEPA Desktop Purifier",
      category: "Purifiers",
      price: "₹180",
      originalPrice: "₹220",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 25,
      description:
        "Compact desktop air purifier perfect for personal workspace air cleaning with whisper-quiet operation and efficient filtration.",
      features: [
        "Desktop compact size",
        "Whisper-quiet operation",
        "True HEPA filter",
        "USB powered",
        "Touch controls",
        "LED air quality indicator",
      ],
      specifications: {
        Coverage: "Up to 100 sq ft",
        "CADR Rating": "50 CFM",
        "Power Source": "USB/AC adapter",
        "Noise Level": "< 20 dB",
        Dimensions: "8 x 6 x 10 inches",
        Warranty: "1 year",
      },
    },
    90: {
      id: 90,
      name: "UV-C Air Sanitizer",
      category: "Purifiers",
      price: "₹380",
      originalPrice: "₹450",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 12,
      description:
        "UV-C light air sanitization system for effective elimination of airborne viruses, bacteria, and pathogens in indoor environments.",
      features: [
        "UV-C germicidal technology",
        "99.9% pathogen elimination",
        "Safety sensors",
        "Timer settings",
        "Portable design",
        "Chemical-free sanitization",
      ],
      specifications: {
        "UV-C Wavelength": "254 nm",
        Coverage: "Up to 300 sq ft",
        Effectiveness: "99.9% pathogen kill",
        Safety: "Motion sensors",
        Timer: "15-60 minutes",
        Warranty: "2 years",
      },
    },

    // Additional Allans Medical Products
    91: {
      id: 91,
      name: "Portable Ultrasound Scanner",
      category: "Allans Medical",
      price: "₹35,000",
      originalPrice: "₹40,000",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 4,
      description:
        "Compact portable ultrasound scanner for point-of-care diagnostics with advanced imaging capabilities and wireless connectivity.",
      features: [
        "Portable handheld design",
        "Wireless connectivity",
        "Multiple transducers",
        "Cloud storage",
        "Real-time imaging",
        "Battery operated",
      ],
      specifications: {
        Display: "10-inch touchscreen",
        Transducers: "Linear, Convex, Phased",
        "Battery Life": "4 hours continuous",
        Connectivity: "Wi-Fi, Bluetooth",
        Weight: "2.5 kg",
        Warranty: "2 years",
      },
    },
    92: {
      id: 92,
      name: "Digital X-Ray Detector",
      category: "Allans Medical",
      price: "₹28,000",
      originalPrice: "₹32,000",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 6,
      description:
        "High-resolution digital X-ray detector panel for retrofit of existing X-ray systems with instant digital imaging capabilities.",
      features: [
        "High-resolution imaging",
        "Instant digital capture",
        "Wireless operation",
        "Retrofit compatibility",
        "DICOM compliance",
        "Portable design",
      ],
      specifications: {
        "Panel Size": "35 x 43 cm",
        Resolution: "143 µm pixel pitch",
        Conversion: "Cesium Iodide",
        Connectivity: "Wireless",
        "Battery Life": "8 hours",
        Warranty: "3 years",
      },
    },
    93: {
      id: 93,
      name: "Patient Monitor System",
      category: "Allans Medical",
      price: "₹12,000",
      originalPrice: "₹14,000",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 8,
      description:
        "Multi-parameter patient monitoring system for continuous vital signs monitoring in clinical environments with alarm management.",
      features: [
        "Multi-parameter monitoring",
        "Continuous vital signs",
        "Alarm management",
        "Data recording",
        "Network connectivity",
        "Touch screen interface",
      ],
      specifications: {
        Parameters: "ECG, SpO2, NIBP, Temp",
        Display: "15-inch color LCD",
        Storage: "72 hours trend data",
        Connectivity: "LAN, Wi-Fi",
        Battery: "4 hours backup",
        Warranty: "2 years",
      },
    },

    // Additional Adonis Medical Products
    94: {
      id: 94,
      name: "Surgical C-Arm System",
      category: "Adonis Medical",
      price: "₹120,000",
      originalPrice: "₹135,000",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 2,
      description:
        "Advanced surgical C-arm imaging system with high-resolution digital imaging for complex surgical procedures and interventions.",
      features: [
        "High-resolution digital imaging",
        "Surgical navigation support",
        "3D reconstruction",
        "Low-dose radiation",
        "Ergonomic design",
        "Advanced image processing",
      ],
      specifications: {
        Generator: "32 kW",
        "Image Intensifier": "30 cm",
        Resolution: "2.8 lp/mm",
        "C-arm Movement": "Full orbital",
        "Dose Management": "Auto exposure",
        Warranty: "3 years",
      },
    },
    95: {
      id: 95,
      name: "Mobile X-Ray Unit",
      category: "Adonis Medical",
      price: "₹55,000",
      originalPrice: "₹62,000",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 3,
      description:
        "Mobile X-ray imaging unit for bedside radiography with advanced positioning capabilities and wireless image transfer.",
      features: [
        "Mobile bedside imaging",
        "Wireless image transfer",
        "Advanced positioning",
        "Battery operation",
        "Digital radiography",
        "Easy maneuverability",
      ],
      specifications: {
        Output: "40 mA",
        "kVp Range": "40-110 kVp",
        Generator: "High frequency",
        Battery: "8 hours operation",
        Weight: "180 kg",
        Warranty: "2 years",
      },
    },
    96: {
      id: 96,
      name: "Anesthesia Machine",
      category: "Adonis Medical",
      price: "₹45,000",
      originalPrice: "₹50,000",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 4,
      description:
        "Modern anesthesia delivery system with advanced ventilation modes and comprehensive patient monitoring for surgical procedures.",
      features: [
        "Advanced ventilation modes",
        "Integrated monitoring",
        "Gas delivery system",
        "Safety backup systems",
        "Electronic controls",
        "Alarm management",
      ],
      specifications: {
        "Ventilation Modes": "IPPV, SIMV, PSV",
        "Gas Types": "O2, N2O, Air",
        Monitoring: "Multi-parameter",
        Display: "15-inch touchscreen",
        Backup: "Manual ventilation",
        Warranty: "3 years",
      },
    },

    // Additional COVID-19 Products
    97: {
      id: 97,
      name: "PCR Testing Equipment",
      category: "COVID 19",
      price: "₹25,000",
      originalPrice: "₹28,000",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 6,
      description:
        "High-throughput PCR testing equipment for rapid COVID-19 diagnosis with automated sample processing and result reporting.",
      features: [
        "High-throughput processing",
        "Automated sample handling",
        "Rapid result reporting",
        "Quality control systems",
        "Data management",
        "Regulatory compliance",
      ],
      specifications: {
        Throughput: "96 samples/run",
        "Cycle Time": "90 minutes",
        Sensitivity: "99.9%",
        Specificity: "99.5%",
        Automation: "Fully automated",
        Warranty: "2 years",
      },
    },
    98: {
      id: 98,
      name: "Antigen Test Kit Analyzer",
      category: "COVID 19",
      price: "₹8,500",
      originalPrice: "₹10,000",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 10,
      description:
        "Rapid antigen test analyzer for point-of-care COVID-19 testing with quick results and easy operation for clinical settings.",
      features: [
        "Rapid antigen testing",
        "Point-of-care operation",
        "Quick results (15 minutes)",
        "Easy operation",
        "Quality assurance",
        "Connectivity options",
      ],
      specifications: {
        "Test Time": "15 minutes",
        "Sample Type": "Nasal swab",
        Sensitivity: "95%",
        Specificity: "98%",
        Connectivity: "USB, Wi-Fi",
        Warranty: "1 year",
      },
    },
    99: {
      id: 99,
      name: "UV Disinfection Chamber",
      category: "COVID 19",
      price: "₹12,000",
      originalPrice: "₹14,000",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 8,
      description:
        "Professional UV-C disinfection chamber for sterilizing medical equipment, personal items, and surfaces to prevent COVID-19 transmission.",
      features: [
        "UV-C sterilization",
        "Large chamber capacity",
        "Automated cycles",
        "Safety interlocks",
        "Timer controls",
        "Ozone-free operation",
      ],
      specifications: {
        "Chamber Size": "60 x 40 x 40 cm",
        "UV-C Power": "254 nm wavelength",
        "Cycle Time": "5-30 minutes",
        Effectiveness: "99.9% pathogen kill",
        Safety: "Multiple interlocks",
        Warranty: "2 years",
      },
    },

    // Additional Unified Communications Products
    100: {
      id: 100,
      name: "IP Phone System",
      category: "Unified Communications",
      price: "₹8,500",
      originalPrice: "₹10,000",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 12,
      description:
        "Complete IP phone system for small to medium businesses with advanced features and scalable architecture for growing organizations.",
      features: [
        "Scalable IP telephony",
        "Advanced call features",
        "Auto attendant",
        "Call recording",
        "Mobile integration",
        "Web-based management",
      ],
      specifications: {
        Capacity: "Up to 200 users",
        Protocols: "SIP, H.323",
        Features: "IVR, ACD, CTI",
        Integration: "CRM compatible",
        Management: "Web interface",
        Warranty: "3 years",
      },
    },
    101: {
      id: 101,
      name: "Video Conferencing System",
      category: "Unified Communications",
      price: "₹15,000",
      originalPrice: "₹18,000",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 6,
      description:
        "Professional video conferencing system for boardrooms and meeting spaces with 4K video quality and advanced collaboration features.",
      features: [
        "4K video quality",
        "Multi-party conferencing",
        "Content sharing",
        "Recording capabilities",
        "Remote management",
        "Cloud connectivity",
      ],
      specifications: {
        "Video Quality": "4K Ultra HD",
        Audio: "Surround sound",
        Participants: "Up to 100",
        Connectivity: "IP/Cloud",
        Recording: "Local/Cloud",
        Warranty: "3 years",
      },
    },
    102: {
      id: 102,
      name: "Contact Center Solution",
      category: "Unified Communications",
      price: "₹25,000",
      originalPrice: "₹30,000",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 4,
      description:
        "Comprehensive contact center solution with omnichannel support, workforce management, and advanced analytics for customer service operations.",
      features: [
        "Omnichannel support",
        "Workforce management",
        "Real-time analytics",
        "Quality monitoring",
        "CRM integration",
        "Cloud deployment",
      ],
      specifications: {
        Agents: "Up to 500",
        Channels: "Voice, email, chat, SMS",
        Analytics: "Real-time dashboards",
        Integration: "API-based",
        Deployment: "Cloud/On-premise",
        Warranty: "3 years",
      },
    },

    // Additional HP Series EPABX Products
    103: {
      id: 103,
      name: "HP Digital EPABX System",
      category: "HP Series(EPABX)",
      price: "₹6,500",
      originalPrice: "₹7,500",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 8,
      description:
        "Digital EPABX system with advanced call management features and scalable architecture for growing businesses requiring reliable communication.",
      features: [
        "Digital call switching",
        "Advanced call routing",
        "Voice mail system",
        "Conference calling",
        "Call accounting",
        "Remote programming",
      ],
      specifications: {
        Extensions: "Up to 128",
        Lines: "Up to 32 CO lines",
        Features: "100+ call features",
        Memory: "Non-volatile",
        Programming: "Remote/Local",
        Warranty: "2 years",
      },
    },
    104: {
      id: 104,
      name: "HP Hybrid Communication System",
      category: "HP Series(EPABX)",
      price: "₹12,000",
      originalPrice: "₹14,000",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 5,
      description:
        "Hybrid communication system combining traditional EPABX with IP telephony for flexible deployment in mixed technology environments.",
      features: [
        "Hybrid TDM/IP architecture",
        "Flexible deployment",
        "Legacy integration",
        "IP phone support",
        "Unified messaging",
        "Scalable design",
      ],
      specifications: {
        Capacity: "Up to 256 users",
        Technology: "TDM + IP",
        Phones: "Digital + IP",
        Trunks: "Analog/Digital/SIP",
        Features: "UC integration",
        Warranty: "3 years",
      },
    },
    105: {
      id: 105,
      name: "HP Enterprise EPABX",
      category: "HP Series(EPABX)",
      price: "₹25,000",
      originalPrice: "₹28,000",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      inStock: true,
      stockCount: 3,
      description:
        "Enterprise-grade EPABX system for large organizations requiring high-capacity communication with advanced features and redundancy.",
      features: [
        "Enterprise scalability",
        "High availability",
        "Advanced routing",
        "Network integration",
        "Redundant architecture",
        "Professional management",
      ],
      specifications: {
        Capacity: "Up to 2000 users",
        Redundancy: "Hot standby",
        Management: "Centralized",
        Integration: "ERP/CRM",
        Reliability: "99.9% uptime",
        Warranty: "5 years",
      },
    },
  };

  // Default product template for any missing products
  const defaultProduct = {
    id: parseInt(id || "1"),
    name: "Product Details",
    category: "General",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
    inStock: true,
    description:
      "Professional grade product designed for business use. Contact our sales team for detailed specifications and pricing information.",
    features: [
      "Professional grade quality",
      "Reliable performance",
      "Easy installation",
      "Technical support included",
      "Warranty coverage",
      "Training available",
    ],
    specifications: {
      Type: "Professional Equipment",
      Installation: "Professional setup included",
      Support: "Technical support available",
      Training: "User training provided",
      Maintenance: "Service contracts available",
      Warranty: "Standard warranty included",
    },
  };

  const product =
    productsDatabase[parseInt(id || "1") as keyof typeof productsDatabase] ||
    defaultProduct;

  const reviews = [
    {
      id: 1,
      customerName: "Dr. Sarah Johnson",
      rating: 5,
      comment:
        "Excellent quality and very reliable. The performance exceeded our expectations.",
      date: "2024-01-15",
    },
    {
      id: 2,
      customerName: "Dr. Michael Chen",
      rating: 4,
      comment:
        "Great equipment, easy to use. Setup was straightforward and professional.",
      date: "2024-01-10",
    },
    {
      id: 3,
      customerName: "Dr. Emily Davis",
      rating: 5,
      comment:
        "Best investment for our business. Highly recommended for quality and service!",
      date: "2024-01-08",
    },
  ];

  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-stellar-600">
            <Link to="/" className="hover:text-stellar-800">
              Home
            </Link>
            <span>/</span>
            <Link
              to={`/category/${product.category
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="hover:text-stellar-800"
            >
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-stellar-800">{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg border border-stellar-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge
                  variant={product.inStock ? "default" : "destructive"}
                  className={
                    product.inStock ? "bg-stellar-600 hover:bg-stellar-700" : ""
                  }
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </Badge>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge
                variant="outline"
                className="text-stellar-600 border-stellar-300 mb-2"
              >
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold text-stellar-800 mb-4">
                {product.name}
              </h1>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(averageRating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-stellar-600">
                    ({reviews.length} reviews)
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-stellar-600 mb-4">{product.description}</p>
                <div className="text-sm text-stellar-600"></div>
              </div>

              {/* PDF Download Button */}
              {hasProductPdf(product.name) && (
                <div className="mb-6">
                  <Button
                    onClick={() => handlePdfDownload(product.name)}
                    variant="outline"
                    className="w-full sm:w-auto border-stellar-600 text-stellar-700 hover:bg-stellar-50"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Product Datasheet
                  </Button>
                </div>
              )}

              {/* Contact Options */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-stellar-800">
                  Contact to Order
                </h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/chat" className="flex-1">
                    <Button className="w-full bg-stellar-600 hover:bg-stellar-700 text-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat Support
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="flex-1 border-green-500 text-green-600 hover:bg-green-50"
                  >
                    WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-stellar-300 text-stellar-700 hover:bg-stellar-50"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features and Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-stellar-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-stellar-800 mb-4">
                Key Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-stellar-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-stellar-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-stellar-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-stellar-800 mb-4">
                Specifications
              </h3>
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-stellar-600 font-medium">{key}:</span>
                    <span className="text-stellar-800">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Customer Reviews */}
        <Card className="border-stellar-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-stellar-800 mb-6">
              Customer Reviews
            </h3>
            <div className="space-y-6">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="border-b border-stellar-100 pb-6 last:border-b-0"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-stellar-800">
                      {review.customerName}
                    </h4>
                    <span className="text-sm text-stellar-500">
                      {review.date}
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-stellar-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
