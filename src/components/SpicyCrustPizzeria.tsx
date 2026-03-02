'use client'

import Image from 'next/image'
import { useState } from 'react'

interface MenuItem {
  id: string
  name: string
  description: string
  price: string
  category: 'pizza' | 'sides' | 'drinks' | 'desserts'
  spicyLevel?: number
}

interface OrderItem extends MenuItem {
  quantity: number
}

export default function SpicyCrustPizzeria() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<'pizza' | 'sides' | 'drinks' | 'desserts'>('pizza')
  const [cart, setCart] = useState<OrderItem[]>([])

  const menuItems: MenuItem[] = [
    // Pizzas
    {
      id: 'p1',
      name: 'The Containment Breach',
      description: 'Extra spicy pepperoni, jalapeños, ghost peppers, and hot sauce',
      price: '$18.99',
      category: 'pizza',
      spicyLevel: 5
    },
    {
      id: 'p2',
      name: 'Site-19 Special',
      description: 'Classic pepperoni, mushrooms, bell peppers, and olives',
      price: '$16.99',
      category: 'pizza',
      spicyLevel: 1
    },
    {
      id: 'p3',
      name: 'The Keter',
      description: 'Carolina reaper sauce, spicy sausage, red onions, and sriracha drizzle',
      price: '$19.99',
      category: 'pizza',
      spicyLevel: 5
    },
    {
      id: 'p4',
      name: 'Safe Class',
      description: 'Cheese pizza with mild peppers and tomatoes',
      price: '$14.99',
      category: 'pizza',
      spicyLevel: 0
    },
    {
      id: 'p5',
      name: 'MTF Meat Lovers',
      description: 'Pepperoni, sausage, bacon, ham, and ground beef',
      price: '$17.99',
      category: 'pizza',
      spicyLevel: 2
    },
    {
      id: 'p6',
      name: 'The Euclid',
      description: 'Medium spice chicken, banana peppers, buffalo sauce base',
      price: '$17.49',
      category: 'pizza',
      spicyLevel: 3
    },
    // Sides
    {
      id: 's1',
      name: 'Anomalous Wings',
      description: 'Chicken wings with choice of sauce (mild, hot, inferno)',
      price: '$12.99',
      category: 'sides'
    },
    {
      id: 's2',
      name: 'Containment Fries',
      description: 'Loaded fries with cheese, bacon, and jalapeños',
      price: '$8.99',
      category: 'sides'
    },
    {
      id: 's3',
      name: 'Garlic Bread Sticks',
      description: 'Fresh baked breadsticks with garlic butter',
      price: '$6.99',
      category: 'sides'
    },
    {
      id: 's4',
      name: 'Foundation Salad',
      description: 'Mixed greens, tomatoes, cucumbers, and ranch',
      price: '$7.99',
      category: 'sides'
    },
    // Drinks
    {
      id: 'd1',
      name: 'Class-A Amnestic Cola',
      description: 'Cold cola (you won\'t remember how good it was)',
      price: '$2.99',
      category: 'drinks'
    },
    {
      id: 'd2',
      name: 'O5 Council Root Beer',
      description: 'Premium root beer (classified ingredients)',
      price: '$3.49',
      category: 'drinks'
    },
    {
      id: 'd3',
      name: 'SCP-294 Special',
      description: 'Any beverage of your choice (within reason)',
      price: '$3.99',
      category: 'drinks'
    },
    {
      id: 'd4',
      name: 'Bottled Water',
      description: 'Regular H2O (non-anomalous)',
      price: '$1.99',
      category: 'drinks'
    },
    // Desserts
    {
      id: 'de1',
      name: 'Chocolate Lava Containment',
      description: 'Warm chocolate cake with molten center',
      price: '$6.99',
      category: 'desserts'
    },
    {
      id: 'de2',
      name: 'Cinnamon Sticks',
      description: 'Sweet cinnamon breadsticks with icing',
      price: '$5.99',
      category: 'desserts'
    },
    {
      id: 'de3',
      name: 'Ice Cream Delight',
      description: 'Vanilla ice cream with chocolate sauce',
      price: '$4.99',
      category: 'desserts'
    }
  ]

  const addToCart = (item: MenuItem) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id)
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ))
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }

  const removeFromCart = (itemId: string) => {
    const existingItem = cart.find(cartItem => cartItem.id === itemId)
    if (existingItem && existingItem.quantity > 1) {
      setCart(cart.map(cartItem => 
        cartItem.id === itemId 
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ))
    } else {
      setCart(cart.filter(cartItem => cartItem.id !== itemId))
    }
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''))
      return total + (price * item.quantity)
    }, 0).toFixed(2)
  }

  const placeOrder = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!')
      return
    }
    alert(`Order placed! Total: $${getTotalPrice()}\n\nYour order will be delivered to your site within 30-45 minutes.`)
    setCart([])
    setIsModalOpen(false)
  }

  const filteredItems = menuItems.filter(item => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-[rgb(17,17,17)]">
      {/* Top Security Banner */}
      <div className="bg-[rgb(230,200,80)] text-white text-center py-1 text-xs font-bold tracking-widest">
        ⚠ PERSONNEL ONLY - LEVEL 1 CLEARANCE ⚠
      </div>

      {/* Header */}
      <header className="bg-[rgb(28,28,28)] border-b-4 border-[rgb(230,200,80)] shadow-[0_0_20px_rgba(230,200,80,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-6">
              <Image 
                src="https://scp-wiki.wdfiles.com/local--files/departments/spicy-crust-pizzeria.png" 
                alt="Spicy Crust Pizzeria Logo" 
                width={80} 
                height={80}
                className="filter drop-shadow-[0_0_10px_rgba(230,200,80,0.5)]"
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-[rgb(230,200,80)] scp-header">
                  SPICY CRUST PIZZERIA
                </h1>
                <p className="text-sm md:text-base text-[rgb(160,160,160)] mt-1 tracking-wide">
                  Foundation Personnel Dining Services
                </p>
                <p className="text-xs text-[rgb(240,240,240)] mt-1 font-bold">
                  "WE DELIVER TO ALL SITES"
                </p>
              </div>
            </div>
            <div className="text-right">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[rgb(230,200,80)] hover:bg-[rgb(200,170,50)] text-white font-bold px-6 py-3 text-sm tracking-wider transition-all shadow-md hover:shadow-lg"
              >
                ORDER NOW
              </button>
              <p className="text-xs text-[rgb(160,160,160)] tracking-wider uppercase mt-2">
                Open 24/7
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* About Section */}
        <section className="scp-card p-8 mb-8">
          <h2 className="text-2xl font-bold text-[rgb(230,200,80)] scp-header mb-4 pb-2 border-b-2 border-[rgb(100,100,100)]">
            ABOUT SPICY CRUST PIZZERIA
          </h2>
          <div className="text-[rgb(220,220,220)] space-y-4">
            <p className="leading-relaxed">
              Established in 1972, Spicy Crust Pizzeria has been serving Foundation personnel across all sites 
              with quality pizza and Italian cuisine. Originally founded as a cover operation, the pizzeria 
              quickly became a beloved institution among Foundation staff.
            </p>
            <p className="leading-relaxed">
              Our commitment to excellence and our understanding of the unique challenges faced by Foundation 
              personnel means we deliver any time, anywhere - even in the most classified locations.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="scp-card p-8 mb-8">
          <h2 className="text-2xl font-bold text-[rgb(230,200,80)] scp-header mb-6 pb-2 border-b-2 border-[rgb(100,100,100)]">
            WHY FOUNDATION PERSONNEL CHOOSE US
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[rgb(28,28,28)] border-2 border-[rgb(100,100,100)] p-6 hover:border-[rgb(230,200,80)] transition-all">
              <div className="text-4xl text-[rgb(230,200,80)] mb-3">🍕</div>
              <h3 className="text-lg font-bold text-[rgb(240,240,240)] mb-2">Fast Delivery</h3>
              <p className="text-sm text-[rgb(200,200,200)]">
                30-45 minutes to any Foundation site, guaranteed.
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] border-2 border-[rgb(100,100,100)] p-6 hover:border-[rgb(230,200,80)] transition-all">
              <div className="text-4xl text-[rgb(230,200,80)] mb-3">🔒</div>
              <h3 className="text-lg font-bold text-[rgb(240,240,240)] mb-2">Secure Service</h3>
              <p className="text-sm text-[rgb(200,200,200)]">
                All delivery personnel have Level 2 clearance.
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] border-2 border-[rgb(100,100,100)] p-6 hover:border-[rgb(230,200,80)] transition-all">
              <div className="text-4xl text-[rgb(230,200,80)] mb-3">🌶️</div>
              <h3 className="text-lg font-bold text-[rgb(240,240,240)] mb-2">Spicy Options</h3>
              <p className="text-sm text-[rgb(200,200,200)]">
                From Safe Class to Keter-level heat!
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] border-2 border-[rgb(100,100,100)] p-6 hover:border-[rgb(230,200,80)] transition-all">
              <div className="text-4xl text-[rgb(230,200,80)] mb-3">⏰</div>
              <h3 className="text-lg font-bold text-[rgb(240,240,240)] mb-2">24/7 Service</h3>
              <p className="text-sm text-[rgb(200,200,200)]">
                Open round the clock for containment teams.
              </p>
            </div>
          </div>
        </section>

        {/* Menu Preview */}
        <section className="scp-card p-8 mb-8">
          <h2 className="text-2xl font-bold text-[rgb(230,200,80)] scp-header mb-4 pb-2 border-b-2 border-[rgb(100,100,100)]">
            FAN FAVORITES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[rgb(28,28,28)] border-2 border-[rgb(100,100,100)] p-6">
              <h3 className="text-xl font-bold text-[rgb(230,200,80)] mb-2">The Containment Breach</h3>
              <p className="text-sm text-[rgb(200,200,200)] mb-3">
                Our spiciest pizza! Extra pepperoni, jalapeños, ghost peppers, and hot sauce.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[rgb(230,200,80)] font-bold text-lg">$18.99</span>
                <span className="text-red-500 text-xs">🌶️🌶️🌶️🌶️🌶️</span>
              </div>
            </div>
            <div className="bg-[rgb(28,28,28)] border-2 border-[rgb(100,100,100)] p-6">
              <h3 className="text-xl font-bold text-[rgb(230,200,80)] mb-2">MTF Meat Lovers</h3>
              <p className="text-sm text-[rgb(200,200,200)] mb-3">
                For the serious meat eaters. Pepperoni, sausage, bacon, ham, and ground beef.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[rgb(230,200,80)] font-bold text-lg">$17.99</span>
                <span className="text-orange-400 text-xs">🌶️🌶️</span>
              </div>
            </div>
            <div className="bg-[rgb(28,28,28)] border-2 border-[rgb(100,100,100)] p-6">
              <h3 className="text-xl font-bold text-[rgb(230,200,80)] mb-2">Site-19 Special</h3>
              <p className="text-sm text-[rgb(200,200,200)] mb-3">
                Classic combination - pepperoni, mushrooms, bell peppers, and olives.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[rgb(230,200,80)] font-bold text-lg">$16.99</span>
                <span className="text-green-400 text-xs">🌶️</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="scp-card p-8">
          <h2 className="text-2xl font-bold text-[rgb(230,200,80)] scp-header mb-4 pb-2 border-b-2 border-[rgb(100,100,100)]">
            CONTACT & DELIVERY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[rgb(28,28,28)] border border-[rgb(100,100,100)] p-6">
              <h3 className="text-lg font-bold text-[rgb(230,200,80)] mb-3">Order Information</h3>
              <div className="space-y-2 text-sm text-[rgb(200,200,200)]">
                <p><strong className="text-[rgb(230,200,80)]">Delivery Time:</strong> 30-45 minutes</p>
                <p><strong className="text-[rgb(230,200,80)]">Minimum Order:</strong> $10.00</p>
                <p><strong className="text-[rgb(230,200,80)]">Payment:</strong> Foundation Credits Only</p>
                <p><strong className="text-[rgb(230,200,80)]">Hotline:</strong> SC-PIZZA (724-8927)</p>
              </div>
            </div>
            <div className="bg-[rgb(28,28,28)] border border-[rgb(100,100,100)] p-6">
              <h3 className="text-lg font-bold text-[rgb(230,200,80)] mb-3">Delivery Coverage</h3>
              <div className="space-y-2 text-sm text-[rgb(200,200,200)]">
                <p>✓ All Foundation Sites</p>
                <p>✓ Area-XX Locations</p>
                <p>✓ Mobile Task Force Bases</p>
                <p>✓ Research Facilities</p>
                <p className="text-xs italic text-[rgb(160,160,160)] mt-3">
                  *Containment breach areas may experience delays
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Order Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-[rgb(28,28,28)] border-4 border-[rgb(230,200,80)] max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-[rgb(28,28,28)] border-b-2 border-[rgb(100,100,100)] p-6 z-10">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[rgb(230,200,80)] scp-header">ORDER MENU</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-[rgb(160,160,160)] hover:text-[rgb(230,200,80)] text-3xl font-bold transition-colors"
                >
                  ×
                </button>
              </div>
              
              {/* Category Tabs */}
              <div className="flex gap-2 mt-4 flex-wrap">
                <button
                  onClick={() => setSelectedCategory('pizza')}
                  className={`px-4 py-2 text-sm font-bold transition-all ${
                    selectedCategory === 'pizza'
                      ? 'bg-[rgb(230,200,80)] text-white'
                      : 'bg-[rgb(17,17,17)] text-[rgb(160,160,160)] hover:text-[rgb(220,220,220)]'
                  }`}
                >
                  🍕 PIZZAS
                </button>
                <button
                  onClick={() => setSelectedCategory('sides')}
                  className={`px-4 py-2 text-sm font-bold transition-all ${
                    selectedCategory === 'sides'
                      ? 'bg-[rgb(230,200,80)] text-white'
                      : 'bg-[rgb(17,17,17)] text-[rgb(160,160,160)] hover:text-[rgb(220,220,220)]'
                  }`}
                >
                  🍟 SIDES
                </button>
                <button
                  onClick={() => setSelectedCategory('drinks')}
                  className={`px-4 py-2 text-sm font-bold transition-all ${
                    selectedCategory === 'drinks'
                      ? 'bg-[rgb(230,200,80)] text-white'
                      : 'bg-[rgb(17,17,17)] text-[rgb(160,160,160)] hover:text-[rgb(220,220,220)]'
                  }`}
                >
                  🥤 DRINKS
                </button>
                <button
                  onClick={() => setSelectedCategory('desserts')}
                  className={`px-4 py-2 text-sm font-bold transition-all ${
                    selectedCategory === 'desserts'
                      ? 'bg-[rgb(230,200,80)] text-white'
                      : 'bg-[rgb(17,17,17)] text-[rgb(160,160,160)] hover:text-[rgb(220,220,220)]'
                  }`}
                >
                  🍰 DESSERTS
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Menu Items */}
                <div className="lg:col-span-2 space-y-4">
                  {filteredItems.map((item) => (
                    <div key={item.id} className="bg-[rgb(17,17,17)] border-2 border-[rgb(100,100,100)] p-4 hover:border-[rgb(230,200,80)] transition-all">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-[rgb(240,240,240)] mb-1">{item.name}</h3>
                          <p className="text-sm text-[rgb(200,200,200)] mb-2">{item.description}</p>
                          <div className="flex items-center gap-3">
                            <span className="text-[rgb(230,200,80)] font-bold text-lg">{item.price}</span>
                            {item.spicyLevel !== undefined && item.spicyLevel > 0 && (
                              <span className="text-xs">
                                {'🌶️'.repeat(item.spicyLevel)}
                              </span>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={() => addToCart(item)}
                          className="bg-[rgb(230,200,80)] hover:bg-[rgb(200,170,50)] text-white font-bold px-4 py-2 text-sm transition-all ml-4"
                        >
                          ADD
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cart */}
                <div className="lg:col-span-1">
                  <div className="bg-[rgb(17,17,17)] border-2 border-[rgb(230,200,80)] p-4 sticky top-24">
                    <h3 className="text-xl font-bold text-[rgb(230,200,80)] mb-4 pb-2 border-b border-[rgb(100,100,100)]">
                      YOUR ORDER
                    </h3>
                    {cart.length === 0 ? (
                      <p className="text-sm text-[rgb(160,160,160)] text-center py-6">Cart is empty</p>
                    ) : (
                      <>
                        <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                          {cart.map((item) => (
                            <div key={item.id} className="bg-[rgb(28,28,28)] p-3 border border-[rgb(100,100,100)]">
                              <div className="flex items-start justify-between mb-2">
                                <span className="text-sm text-[rgb(220,220,220)] font-bold flex-1">{item.name}</span>
                                <button
                                  onClick={() => removeFromCart(item.id)}
                                  className="text-[rgb(160,160,160)] hover:text-red-500 text-lg ml-2"
                                >
                                  ×
                                </button>
                              </div>
                              <div className="flex items-center justify-between text-xs">
                                <span className="text-[rgb(160,160,160)]">Qty: {item.quantity}</span>
                                <span className="text-[rgb(230,200,80)] font-bold">
                                  ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="border-t-2 border-[rgb(100,100,100)] pt-4 mb-4">
                          <div className="flex items-center justify-between text-lg font-bold">
                            <span className="text-[rgb(220,220,220)]">TOTAL:</span>
                            <span className="text-[rgb(230,200,80)]">${getTotalPrice()}</span>
                          </div>
                        </div>
                        <button
                          onClick={placeOrder}
                          className="w-full bg-[rgb(230,200,80)] hover:bg-[rgb(200,170,50)] text-white font-bold py-3 text-sm tracking-wider transition-all"
                        >
                          PLACE ORDER
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
