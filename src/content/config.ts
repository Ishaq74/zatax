import { defineCollection, reference, z } from 'astro:content';

// Blog Posts
const blog = defineCollection({
	type: 'content',
	schema: z.object({
		id: z.string(),
		title: z.string(),
		content: z.string(),
		excerpt: z.string().optional(),
		author: reference('users').optional(),
		category: reference('categories'),
		tags: z.array(z.string()).optional(),
		pubDate: z.coerce.date(),
		updatedAt: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		image_alt: z.string().optional(),
		comments: z.array(reference('comments')).optional(),
		related_posts: z.array(reference('blog')).optional()
	  })
  });

  // Produits
const products = defineCollection({
	type: 'content',
	schema: z.object({
		id: z.string(),
		name: z.string(),
		description: z.string(),
		price: z.number(),
		category: reference('categories'),
		image_url: z.string().optional(),
		image_alt: z.string().optional(),
		gallery: z.array(z.object({ image: z.string() })).optional(),
		sku: z.string().optional(),
		brand: z.string().optional(),
		manufacturer: z.string().optional(),
		weight: z.string().optional(),
		dimensions: z.string().optional(),
		createdAt: z.coerce.date(),
		updatedAt: z.coerce.date(),
		reviews: z.array(reference('reviews')).optional(),
		features: z.array(reference('features')).optional(),
		specifications: z.array(z.object({
		  name: z.string(),
		  value: z.string(),
		})).optional(),
		availability: z.string().optional(),
		warranty: z.string().optional(),
	  })
  });

// Utilisateur
const users = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    address_street: z.string().optional(),
    address_city: z.string(),
    address_state: z.string().optional(),
    address_postalCode: z.string(),
    address_country: z.string(),
    phone: z.string().optional(),
    orders: z.array(reference('orders')).optional(),
    profile_picture_url: z.string().optional(),
    profile_picture_alt: z.string().optional(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    resetPasswordToken: z.string().optional(),
    resetPasswordExpires: z.coerce.date().optional(),
    isAdmin: z.boolean(),
    reviews: z.array(reference('reviews')).optional(),
    social_links: z.array(z.object({
      platform: z.string(),
      url: z.string().url(),
    })).optional()
  })
});

// Catégories
const categories = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().optional(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    image_url: z.string().optional(),
    image_alt: z.string().optional(),
    parent_category: reference('categories').optional(), // Référence à la catégorie parente pour les sous-catégories
  })
});

// Commandes
const orders = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    user_id: reference('users'),
    product_ids: z.array(reference('products')),
    total_price: z.number(),
    status: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    shipping_address: z.string(),
    billing_address: z.string(),
    payment_method: z.string(),
    tracking_number: z.string().optional(),
    shipping_method: z.string().optional(),
    estimated_delivery: z.coerce.date().optional(),
  })
});

// Services
const services = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      name: z.string(),
      description: z.string(),
      price: z.number().optional(),
      category: reference('categories'),
      image_url: z.string().url().optional(),
      image_alt: z.string().optional(),
      features: z.array(reference('features')).optional(), // Référence aux caractéristiques
      service_area: z.string().optional(),
      provider: reference('organizations').optional(),
      duration: z.string().optional(),
      availability: z.string().optional(),
      terms_conditions: z.string().optional(),
    })
});

// Features (Caractéristiques)
const features = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().optional(),
    icon_url: z.string().optional(),
    icon_alt: z.string().optional(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
  })
});

// FAQ
const faqs = defineCollection({
	type: 'content',
	schema: z.object({
	  id: z.string(),
	  question: z.string(),
	  answer: z.string(),
	  category: reference('categories').optional(),
	  createdAt: z.coerce.date(),
	  updatedAt: z.coerce.date(),
	})
  });
  
  // Reviews
  const reviews = defineCollection({
	  type: 'content',
	  schema: z.object({
		id: z.string(),
		rating: z.number().min(1).max(5),
		comment: z.string().optional(),
		reviewer: reference('users'),
		product: reference('products').optional(),
		service: reference('services').optional(),
		createdAt: z.coerce.date(),
		updatedAt: z.coerce.date(),
	  })
	});



// Menus
const menus = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    type: z.enum(['primary', 'secondary', 'footer']),
    items: z.array(z.object({
      label: z.string(),
      url: z.string().url(),
      submenu: z.array(z.object({
        label: z.string(),
        url: z.string().url(),
      })).optional(),
    })),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
  })
});

// Contact Points
const contactPoints = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    type: z.enum(['email', 'phone', 'address']),
    value: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
  })
});

// Organizations
const organizations = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().optional(),
    logo_url: z.string().url().optional(),
    logo_alt: z.string().optional(),
    contactPoints: z.array(reference('contactPoints')).optional(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
  })
});

// Opening Hours
const openingHours = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    day_of_week: z.enum(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']),
    opening_time: z.string(), // Format HH:MM
    closing_time: z.string(), // Format HH:MM
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
  })
});

export const collections = {
  users,
  products,
  categories,
  orders,
  services,
  features,
  blog,
  menus,
  faqs,
  contactPoints,
  reviews,
  organizations,
  openingHours
};
