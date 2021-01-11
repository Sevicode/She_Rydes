const products = [
  {
    name: 'Outback Outfitter',
    image: '/images/Jackets/outback-outfitter-tan-front.jpg',
    description:
      'The genuine leather Outback Outfitter collection comes in pink sunset and camel back brown offering a shapely fit to show off your silhouette while you ride the streets, or the outback. Chest and waist pockets have good width for storing keys and small wallets. Ventilation pockets allow for a cooler ride but can be zipped up for protection in wind and rain. All jackets come with CE level 1 armour in the shoulders, elbows and back. This armour is removable too so you can look stylish on and off the bike! The outback outfitter is true to size, however, if you wish to layer underneath and use this as your winter choice, we suggest going a size up.',
    category: 'Jacket',
    price: 189.95,
    countInStock: 10,
    rating: 0,
    numReviews: 12,
    SKU: "OBOF"
  },
  {
    name: 'Night Ryder Leather Jacket',
    image: '/images/Jackets/night-ryder-front.jpg',
    description:
      'The must have ‘little black dress’ in the biker chicks wardrobe. This jacket is super soft with adjustable waist straps to loosen or tighten to fit. True to size with a slim fit style. The front zipper allows for quick changes and large pockets on the chest and waist have the ability to carry your basics. All jackets come with CE level 1 armour in the shoulders, elbows and back. This armour is removable too so you can look stylish on and off the bike!',
    category: 'Jacket',
    price: 239.50,
    countInStock: 7,
    rating: 0,
    numReviews: 8,
    SKU: "NRLJ"
  },
  {
    name: 'Blue Bird Leather Jacket',
    image: '/images/Jackets/blue-bird-front.jpg',
    description:
      'The biker jacket with a fresh face to lighten up the mood. Let out your creative flair and be noticed in traffic with this iconic deep blue accent. There are lots of deep pockets on this one and a removable waist belt to pull in your frame. The collar can be buttoned open or fastened high up the neck when the wind is pushing through. All jackets come with CE level 1 armour in the shoulders, elbows and back. This armour is removable too so you can look stylish on and off the bike!',
    category: 'Jacket',
    price: 99.95,
    countInStock: 5,
    rating: 0,
    numReviews: 12,
    SKU: "BBLJ"
  },
  {
    name: 'In the Hood Denim',
    image: '/images/Jackets/in-the-hood-denim-stock.jpg',
    description:
      'For a cooler riding experience during the summer months, this washed light blue denim jacket has a detachable hood for two different styles. A great piece for on and off the bike as you can easily remove the CE level 1 armour from the shoulders, elbows and back. Large chest pockets and zipper on the wrists if you wish to roll up your sleeves off the bike. Front zipper and fasteners for ease of wear. A great jacket to add your embroidered patches on to give it that personalised flair.',
    category: 'Jacket',
    price: 199.95,
    countInStock: 11,
    rating: 0,
    numReviews: 12,
    SKU: "ITHD"
  },
  {
    name: 'Fur De Denim',
    image: '/images/Jackets/fur-de-denim-front.jpg',
    description:
      'For a cooler riding experience during the summer months, this black denim jacket has detachable fur for two different styles. A great piece for on and off the bike as you can easily remove the CE level 1 armour from the shoulders, elbows and back. Fur De Denim has a low cut back so no one will be staring at your butt whilst you ride. It is a box fit, however, waist adjusters allow for a more silhouette look if desired. True to size. Cute chest pockets and front zipper for ease of wear. A great jacket to add your embroidered patches on to give it that personalised flair.',
    category: 'Jacket',
    price: 149.99,
    countInStock: 7,
    rating: 0,
    numReviews: 10,
    SKU: "FDD"
  },
  {
    name: 'For the Love of Gloves',
    image: '/images/Gloves/tan-gloves-2.jpg',
    description:
      'Idyllic for those frosty mornings and cold, winded night rides. Made with inbuilt knuckle protection and adjustable fasteners on the wrists. Touch screen index finger ability allows you to quickly tap in a street address or look up a song.',
    category: 'Gloves',
    price: 49.95,
    countInStock: 10,
    rating: 0,
    numReviews: 12,
    SKU: "FTLOG"
  },

  {
    name: 'Pants',
    image: '/images/Pants/Pantsblack.jpg',
    description:
      'Stylish and safe for the ride and the slide.',
    category: 'Pants',
    price: 89.95,
    countInStock: 10,
    rating: 0,
    numReviews: 12,
    SKU: "PANTS"
  },

  {
    name: 'She Rydes Sticker/Patch',
    image: '/images/Accessories/she-rydes-sticker.jpg',
    description:
      'All of these designs are available in iron on embroidered patches or cut out gloss stickers. Personalise your jackets, helmets, bags and caps. Let the world know She Rydes!',
    category: 'Accessories',
    price: 9.95,
    countInStock: 20,
    rating: 0,
    numReviews: 12,
    SKU: "SRPS"
  },

  {
    name: 'Blazing Wheel Sticker/Patch',
    image: '/images/Accessories/blazing-wheel-patch.jpg',
    description:
      'All of these designs are available in iron on embroidered patches or cut out gloss stickers. Personalise your jackets, helmets, bags and caps. Let the world know She Rydes!',
    category: 'Accessories',
    price: 9.95,
    countInStock: 20,
    rating: 0,
    numReviews: 12,
    SKU: "BWPS"
  },

  {
    name: 'Sporty Side Sticker/Patch',
    image: '/images/Accessories/sporty-side-patch.jpg',
    description:
      'All of these designs are available in iron on embroidered patches or cut out gloss stickers. Personalise your jackets, helmets, bags and caps. Let the world know She Rydes!.',
    category: 'Accessories',
    price: 9.95,
    countInStock: 20,
    rating: 0,
    numReviews: 12,
    SKU: "SSPS"
  },

  {
    name: 'Ignited Heart Sticker/Patch',
    image: '/images/Accessories/ignited-heart-sticker.jpg',
    description:
      'All of these designs are available in iron on embroidered patches or cut out gloss stickers. Personalise your jackets, helmets, bags and caps. Let the world know She Rydes!',
    category: 'Accessories',
    price: 9.95,
    countInStock: 20,
    rating: 0,
    numReviews: 12,
    SKU: "IHPS"
  },
  {
    name: 'Ryde or Dye Sticker/Patch',
    image: '/images/Accessories/ryde-or-dye-patch.jpg',
    description:
      'All of these designs are available in iron on embroidered patches or cut out gloss stickers. Personalise your jackets, helmets, bags and caps. Let the world know She Rydes!',
    category: 'Accessories',
    price: 9.95,
    countInStock: 20,
    rating: 0,
    numReviews: 12,
    SKU: "RDPS"
  },
  {
    name: 'Coastal Cruiser Sticker/Patch',
    image: '/images/Accessories/coastal-cruiser-patch.jpg',
    description:
      'All of these designs are available in iron on embroidered patches or cut out gloss stickers. Personalise your jackets, helmets, bags and caps. Let the world know She Rydes!',
    category: 'Accessories',
    price: 9.95,
    countInStock: 0,
    rating: 0,
    numReviews: 12,
    SKU: "CCPS"
  },
]

export default products