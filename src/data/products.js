const products = [
  {
    id: 1,
    name: "Diamond Ring",
    price: 750,
    category: "ring",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e"
  },
  {
    id: 2,
    name: "Diamond Ring",
    price: 600,
    category: "ring",
    image: "https://tse2.mm.bing.net/th/id/OIP.hBIiipAR01NKs7q3E2WhdQHaHa?pid=Api&P=0&h=180"
  },
  {
    id: 3,
    name: "Gold Necklace",
    price: 400,
    category: "necklace",
    image: "https://tse1.mm.bing.net/th/id/OIP.OLLa4T2Ch5vyt7ejg0wuKwHaD3?pid=Api&P=0&h=180"
  },
  {
    id: 4,
    name: "Gold Earrings",
    price: 300,
    category: "earring",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638"
  },

  {
    id: 5,
    name: "Gold Necklace",
    price: 350,
    category: "necklace",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f"
  },
  {
    id: 6,
    name: "Gold Necklace",
    price: 200,
    category: "necklace",
    image: "https://tse2.mm.bing.net/th/id/OIP.tdgq2eTQELExWkTwJ4TmjQHaE8?pid=Api&P=0&h=180"
  },
  {
    id: 7,
    name: "Gold Earrings",
    price: 360,
    category: "earring",
    image: "https://tse2.mm.bing.net/th/id/OIP.3wXRupbYRECoQ2-FKIEHzgHaHa?pid=Api&P=0&h=180"
  },
  {
    id: 8,
    name: "Gold Ring",
    price: 250,
    category: "ring",
    image: "https://tse2.mm.bing.net/th/id/OIP.Dsgh7-RNnV3SQAgcECqQPQHaHa?pid=Api&P=0&h=180"
  },
  {
    id: 9,
    name: "Gold Ring",
    price: 280,
    category: "ring",
    image: "https://tse1.mm.bing.net/th/id/OIP.m87pTWxCO7tU34oMwAdy8QHaHa?pid=Api&P=0&h=180"
  },
  {
    id: 10,
    name: "Gold Ring",
    price: 200,
    category: "ring",
    image: "https://tse2.mm.bing.net/th/id/OIP.yx3FwfAKOnBeLobY2wpDhgHaG8?pid=Api&P=0&h=180"
  },
  {
    id: 11,
    name: "Gold Ring",
    price: 310,
    category: "ring",
    image: "https://tse4.mm.bing.net/th/id/OIP.Yxp0TH6AhJKe8J7MID1EFQHaHZ?pid=Api&P=0&h=180"
  },

  
  {
    id: 12,
    name: "Diamond Ring",
    price: 750,
    category: "ring",
    image: "https://tse3.mm.bing.net/th/id/OIP.__ODLR1x0yozkvtXmYOcfwHaHa?pid=Api&P=0&h=180"
  },
  {
    id: 13,
    name: "Gold Necklace",
    price: 500,
    category: "necklace",
    image: "https://2.bp.blogspot.com/-Avz08GINVSY/UCu9W226RRI/AAAAAAAACiA/qnUhz1aeD8M/s1600/necklace-zoom-DSC_9776.jpg"
  },
  {
    id: 14,
    name: "Gold Necklace",
    price: 460,
    category: "necklace",
    image: "https://tse4.mm.bing.net/th/id/OIP.wTUR8_yEM-4pRJJOH-pMdwHaHa?pid=Api&P=0&h=180"
  },
  {
    id: 15,
    name: "Gold Necklace",
    price: 400,
    category: "necklace",
    image: "https://i.pinimg.com/originals/70/d0/99/70d0994177b7e6e915ecd13cf4d2171f.jpg"
  },
  {
    id: 16,
    name: "Gold Necklace",
    price: 750,
    category: "necklace",
    image: "https://tse4.mm.bing.net/th/id/OIP.VNOxfbxnRkwiyJM59LJ9QwHaHa?pid=Api&P=0&h=180"
  },
  {
    id: 17,
    name: "Gold Necklace",
    price: 550,
    category: "necklace",
    image: "https://tse3.mm.bing.net/th/id/OIP._zVrt2FpMPrSVI_6vV-P8AHaIg?pid=Api&P=0&h=180"
  },

  {
    id: 18,
    name: "Gold Earrings",
    price: 300,
    category: "earring",
    image: "https://tse3.mm.bing.net/th/id/OIP.XjZU0KCg9ozQwAW2lN83lgHaHa?pid=Api&P=0&h=180"
  },
  {
    id: 19,
    name: "Gold Earrings",
    price: 200,
    category: "earring",
    image: "https://tse2.mm.bing.net/th/id/OIP.76eD3p50JReMQAeBjJgX6QHaHa?pid=Api&P=0&h=180"
  },
  {
    id: 20,
    name: "Gold Earrings",
    price: 350,
    category: "earring",
    image: "https://tse4.mm.bing.net/th/id/OIP.eZQv3bzaJ7TUzYA7xshXpQHaHa?pid=Api&P=0&h=180"
  },
  {
    id: 21,
    name: "Gold Earrings",
    price: 210,
    category: "earring",
    image: "https://tse2.mm.bing.net/th/id/OIP.zw-5tC3rvaA9GecC8igFVgHaHa?pid=Api&P=0&h=180"
  },
  {
    id: 22,
    name: "Gold Earrings",
    price: 270,
    category: "earring",
    image: "https://tse2.mm.bing.net/th/id/OIP.oflDukFJT6gXUVC2DSW5eAHaHa?pid=Api&P=0&h=180"
  },
  {
    id: 23,
    name: "Gold Earrings",
    price: 200,
    category: "earring",
    image: "https://tse1.mm.bing.net/th/id/OIP.eia6bpfNH59ZZKH73UG3bgHaHa?pid=Api&P=0&h=180"
  },
  {
    id: 24,
    name: "Couple set Necklace",
    price: 400,
    category: "sets",
    image: "https://up.yimg.com/ib/th/id/OIP.kgMrJYg1pC8EfNHJOolBnwHaHa?pid=Api&rs=1&c=1&qlt=95&w=121&h=121"
  },
  
  {
    id: 25,
    name: "Couple set Rings",
    price: 200,
    category: "sets",
    image: "https://up.yimg.com/ib/th/id/OIP.CVPYdZQLQV8zVbJn20hNPgHaHa?pid=Api&rs=1&c=1&qlt=95&w=121&h=121"
  },
  {
    id: 26,
    name: "Couple set Rings",
    price: 250,
    category: "sets",
    image: "https://sp.yimg.com/ib/th/id/OIP.bC929JmgRC-0OjXY2CEPPAAAAA?pid=Api&w=148&h=148&c=7&dpr=2&rs=1"
  },
  {
    id: 27,
    name: "Couple set Necklace",
    price: 600,
    category: "sets",
    image: "https://up.yimg.com/ib/th/id/OIP.CCW3EgRSnBBFn6U2jTOYfQHaFj?pid=Api&rs=1&c=1&qlt=95&w=147&h=110"
  },
  {
    id: 28,
    name: "Couple set Bracelets",
    price: 800,
    category: "sets",
    image: "https://sp.yimg.com/ib/th/id/OIP.aKDcnqRga4_H2sDIS31CrAHaHa?pid=Api&w=148&h=148&c=7&dpr=2&rs=1"
  },
  {
    id: 29,
    name: "Weeding Collection",
    price: 2800,
    category: "wedding",
    image: "https://tse4.mm.bing.net/th/id/OIP.405SKyzadO_KViy_hvcmQwHaHa?pid=Api&P=0&h=180"
  },
  {
    id: 30,
    name: "Weeding Collection",
    price: 2800,
    category: "wedding",
    image: "https://tse2.mm.bing.net/th/id/OIP.OP5ctMzJ5lQ2_VFcymj_DgHaJR?pid=Api&P=0&h=180"
  },
  {
    id: 31,
    name: "Weeding Collection",
    price: 2800,
    category: "wedding",
    image: "https://tse4.mm.bing.net/th/id/OIP.z2y7_Dmx9fJMXzD_w0IVQQHaJQ?pid=Api&P=0&h=180"
  },
  {
    id: 32,
    name: "Weeding Collection",
    price: 2800,
    category: "wedding",
    image: "https://tse1.mm.bing.net/th/id/OIP.IA5Httx6PfD6oxPm5dwRAgHaFt?pid=Api&P=0&h=180"
  },
  {
    id: 33,
    name: "Weeding Collection",
    price: 2800,
    category: "wedding",
    image: "https://tse1.mm.bing.net/th/id/OIP.77tVhygJ6j8xdXJOvdnpOgHaFj?pid=Api&P=0&h=180"
  },
  {
    id: 34,
    name: "Weeding Collection",
    price: 2800,
    category: "wedding",
    image: "https://tse3.mm.bing.net/th/id/OIP.cJD1l_b9BgNCqUGuxzip6QHaIr?pid=Api&P=0&h=180"
  },
  {
    id: 35,
    name: "Engagement Collection",
    price: 2800,
    category: "engagement",
    image: "https://tse4.mm.bing.net/th/id/OIP.NxM-XI6h04t3ir1m2JPmJQHaHa?pid=Api&P=0&h=180"
  },
  {
    id: 36,
    name: "Engagement Collection",
    price: 2800,
    category: "engagement",
    image: "https://tse4.mm.bing.net/th/id/OIP.WpwSEM-LOHsLQM7a9VcO1AHaHa?pid=Api&P=0&h=180"
  },
  {
    id: 37,
    name: "Engagement Collection",
    price: 2800,
    category: "engagement",
    image: "https://tse3.mm.bing.net/th/id/OIP.8EX_dUeoN23fEc9zKNzkPAHaHa?pid=Api&P=0&h=180"
  },
  {
    id: 38,
    name: "Engagement Collection",
    price: 2800,
    category: "engagement",
    image: "https://tse4.mm.bing.net/th/id/OIP._XdWyGQsJzbeEWwEAGrf5wHaHa?pid=Api&P=0&h=180"
  },
  {
    id: 39,
    name: "Engagement Collection",
    price: 2800,
    category: "engagement",
    image: "https://tse1.mm.bing.net/th/id/OIP.Jz71RMPuamd6qU2xWp1RuAHaHa?pid=Api&P=0&h=180"
  },
  
  {
    id: 40,
    name: "Casual Collection",
    price: 2800,
    category: "casual",
    image: "https://tse3.mm.bing.net/th/id/OIP.i2TvZCrrBUGjGU23U6jDZQHaDt?pid=Api&P=0&h=180"
  },
  {
    id: 41,
    name: "Casual Collection",
    price: 2800,
    category: "casual",
    image: "https://tse2.mm.bing.net/th/id/OIP.QoX38dUURbOSlMeD1ELLSgHaHa?pid=Api&P=0&h=180"
  },
  {
    id: 42,
    name: "Casual Collection",
    price: 2800,
    category: "casual",
    image: "https://tse4.mm.bing.net/th/id/OIP.yLCD8dplUJ3jNBlShcgcogHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 43,
    name: "Casual Collection",
    price: 2800,
    category: "casual",
    image: "https://tse3.mm.bing.net/th/id/OIP.PaQbai2phjfUh4mLOWMsuAHaHa?pid=Api&P=0&h=180"
  },
  {
    id: 44,
    name: "Casual Collection",
    price: 2800,
    category: "casual",
    image: "https://tse2.mm.bing.net/th/id/OIP.lPmqJsY8LyaO4wy9xA9YBwHaFj?pid=Api&P=0&h=180"
  },
  {
    id: 45,
    name: "Casual Collection",
    price: 2800,
    category: "casual",
    image: "https://tse4.mm.bing.net/th/id/OIP.z8MHIkfx619dm4KZUhuuTQHaHa?pid=Api&P=0&h=180"
  },
  {
    id: 46,
    name: "Casual Collection",
    price: 2800,
    category: "casual",
    image: "https://tse1.mm.bing.net/th/id/OIP.w09xlBHQUdALIv7pxTbzNgHaHa?pid=Api&P=0&h=180"
  }
];

export default products;
