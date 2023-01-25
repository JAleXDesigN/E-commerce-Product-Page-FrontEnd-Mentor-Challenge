export interface DataProduct {
  productImages: ProductImages;
  productInfo: ProductInfo;
}

export interface ProductImages {
  images: { [key: string]: string }[];
  thumbnails: { [key: string]: string }[];
}

export interface ProductInfo {
  company: string;
  name: string;
  description: string;
  price: number;
  descPercent: number;
}

export const data: DataProduct[] = [
  {
    productImages: {
      images: [
        {
          src: "https://res.cloudinary.com/dekp1iyjf/image/upload/v1673908687/ecommerce-fementor/image-product-1_cexuca.jpg",
          title: "Image Fall Limited Edition Sneakers Product 1",
        },
        {
          src: "https://res.cloudinary.com/dekp1iyjf/image/upload/v1673908688/ecommerce-fementor/image-product-2_ievyrs.jpg",
          title: "Image Fall Limited Edition Sneakers Product 2",
        },
        {
          src: "https://res.cloudinary.com/dekp1iyjf/image/upload/v1673908688/ecommerce-fementor/image-product-3_jcioqx.jpg",
          title: "Image Fall Limited Edition Sneakers Product 3",
        },
        {
          src: "https://res.cloudinary.com/dekp1iyjf/image/upload/v1673908688/ecommerce-fementor/image-product-4_vbxd5v.jpg",
          title: "Image Fall Limited Edition Sneakers Product 4",
        },
      ],
      thumbnails: [
        {
          src: "https://res.cloudinary.com/dekp1iyjf/image/upload/c_thumb,w_200,g_face/v1673908687/ecommerce-fementor/image-product-1-thumbnail_lv8obr.jpg",
          title: "Thumbnail Fall Limited Edition Sneakers Product 1",
        },
        {
          src: "https://res.cloudinary.com/dekp1iyjf/image/upload/c_thumb,w_200,g_face/v1673908687/ecommerce-fementor/image-product-2-thumbnail_bg65sz.jpg",
          title: "Thumbnail Fall Limited Edition Sneakers Product 2",
        },
        {
          src: "https://res.cloudinary.com/dekp1iyjf/image/upload/c_thumb,w_200,g_face/v1673908687/ecommerce-fementor/image-product-3-thumbnail_unzifl.jpg",
          title: "Thumbnail Fall Limited Edition Sneakers Product 3",
        },
        {
          src: "https://res.cloudinary.com/dekp1iyjf/image/upload/c_thumb,w_200,g_face/v1673908688/ecommerce-fementor/image-product-4-thumbnail_suhgmz.jpg",
          title: "Thumbnail Fall Limited Edition Sneakers Product 4",
        },
      ],
    },
    productInfo: {
      company: "Sneaker Company",
      name: "Fall Limited Edition Sneakers",
      description:
        "These low-profile sneakers are your perfect casual wear companion.      Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      price: 250,
      descPercent: 50,
    },
  },
];
