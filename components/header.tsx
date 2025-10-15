"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search, Menu, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { CartSidebar } from "@/components/cart-sidebar"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold tracking-tight cursor-pointer">Jinsun Machineries</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-sm font-medium hover:text-accent transition-colors">
              Products
            </Link>
           
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
              About
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search machinery..." className="pl-10 bg-muted/50" />
            </div>
          </div>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <CartSidebar />

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search machinery..." className="pl-10 bg-muted/50" />
              </div>
              <nav className="flex flex-col space-y-2">
                <Link href="/products" className="text-sm font-medium hover:text-accent transition-colors py-2">
                  Products
                </Link>
                <a href="#" className="text-sm font-medium hover:text-accent transition-colors py-2">
                  Categories
                </a>
                <a href="#" className="text-sm font-medium hover:text-accent transition-colors py-2">
                  Industrial
                </a>
                <a href="#" className="text-sm font-medium hover:text-accent transition-colors py-2">
                  About
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
