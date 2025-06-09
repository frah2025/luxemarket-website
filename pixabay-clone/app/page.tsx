"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, Download, Heart, User, Settings, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

const images = [
  {
    id: 1,
    src: "/placeholder.svg?height=300&width=400",
    alt: "Islamic Architecture",
    category: "architecture",
    orientation: "landscape",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=300",
    alt: "Islamic Pattern",
    category: "pattern",
    orientation: "portrait",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=300&width=400",
    alt: "Mosque Silhouette",
    category: "architecture",
    orientation: "landscape",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=400",
    alt: "Islamic Calligraphy",
    category: "calligraphy",
    orientation: "square",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=300&width=400",
    alt: "Ramadan Lanterns",
    category: "decoration",
    orientation: "landscape",
  },
  { id: 6, src: "/placeholder.svg?height=400&width=300", alt: "Islamic Art", category: "art", orientation: "portrait" },
  {
    id: 7,
    src: "/placeholder.svg?height=300&width=400",
    alt: "Abstract Islamic",
    category: "abstract",
    orientation: "landscape",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=400&width=400",
    alt: "Islamic Geometry",
    category: "pattern",
    orientation: "square",
  },
  {
    id: 9,
    src: "/placeholder.svg?height=300&width=400",
    alt: "Desert Landscape",
    category: "nature",
    orientation: "landscape",
  },
  {
    id: 10,
    src: "/placeholder.svg?height=400&width=300",
    alt: "Islamic Decoration",
    category: "decoration",
    orientation: "portrait",
  },
  {
    id: 11,
    src: "/placeholder.svg?height=300&width=400",
    alt: "Colorful Abstract",
    category: "abstract",
    orientation: "landscape",
  },
  {
    id: 12,
    src: "/placeholder.svg?height=400&width=400",
    alt: "Water Drop",
    category: "nature",
    orientation: "square",
  },
]

const tags = ["arrière-plan gratuit", "fonds d'écran", "arrière-plans sympas"]

export default function PixabayClone() {
  const [searchQuery, setSearchQuery] = useState("fond d'écran islamique")
  const [selectedOrientation, setSelectedOrientation] = useState("all")
  const [selectedSize, setSelectedSize] = useState("all")
  const [selectedColor, setSelectedColor] = useState("all")

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-green-600">pixabay</div>
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 rounded-full border-gray-300"
                placeholder="Rechercher des images..."
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Toutes les photos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les photos</SelectItem>
                <SelectItem value="photos">Photos</SelectItem>
                <SelectItem value="illustrations">Illustrations</SelectItem>
                <SelectItem value="vectors">Vecteurs</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">Parcourir</Button>
            <Button variant="outline">Connexion</Button>
            <Button variant="outline">Rejoindre</Button>
            <Button className="bg-green-600 hover:bg-green-700">Télécharger</Button>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="border-b border-gray-200 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Select value={selectedOrientation} onValueChange={setSelectedOrientation}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Orientation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Orientation</SelectItem>
                <SelectItem value="horizontal">Horizontal</SelectItem>
                <SelectItem value="vertical">Vertical</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger className="w-24">
                <SelectValue placeholder="Taille" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Taille</SelectItem>
                <SelectItem value="large">Grande</SelectItem>
                <SelectItem value="medium">Moyenne</SelectItem>
                <SelectItem value="small">Petite</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedColor} onValueChange={setSelectedColor}>
              <SelectTrigger className="w-24">
                <SelectValue placeholder="Couleur" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Couleur</SelectItem>
                <SelectItem value="red">Rouge</SelectItem>
                <SelectItem value="blue">Bleu</SelectItem>
                <SelectItem value="green">Vert</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Date de publication" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Date de publication</SelectItem>
                <SelectItem value="today">Aujourd'hui</SelectItem>
                <SelectItem value="week">Cette semaine</SelectItem>
                <SelectItem value="month">Ce mois</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Type de contenu" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Type de contenu</SelectItem>
                <SelectItem value="photo">Photo</SelectItem>
                <SelectItem value="illustration">Illustration</SelectItem>
                <SelectItem value="vector">Vecteur</SelectItem>
              </SelectContent>
            </Select>

            <Badge variant="secondary" className="bg-green-100 text-green-800">
              NOUVEAU
            </Badge>
          </div>

          <div className="flex items-center space-x-4">
            <Settings className="w-5 h-5 text-gray-400" />
            <Select defaultValue="relevant">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Le plus pertinent" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevant">Le plus pertinent</SelectItem>
                <SelectItem value="popular">Populaire</SelectItem>
                <SelectItem value="latest">Plus récent</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Title and Tags */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">391 471 Images gratuites de Fond D'Écran Islamique</h1>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="cursor-pointer hover:bg-gray-100">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Sponsored Images Notice */}
        <div className="mb-6 text-sm text-gray-600">
          Images sponsorisées iStock LIMITED DEAL: 20% off with{" "}
          <span className="font-semibold text-green-600">PIXABAY20</span> coupon
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg bg-gray-100 hover:shadow-lg transition-shadow"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex space-x-2">
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="absolute bottom-2 left-2 right-2">
                <div className="flex items-center justify-between text-white text-xs">
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>Utilisateur</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>1.2k</span>
                    <Heart className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Free Images Notice */}
        <div className="mt-8 text-sm text-gray-600">Images libres de droits</div>
      </main>

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-sm text-gray-600 flex-1 mr-4">
            En cliquant sur « Accepter tous les cookies », vous acceptez le stockage de cookies sur votre appareil pour
            améliorer la navigation sur le site, analyser son utilisation et contribuer à nos efforts de marketing.
          </p>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              Paramètres des cookies
            </Button>
            <Button variant="outline" size="sm">
              Tout refuser
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              Autoriser tous les cookies
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
