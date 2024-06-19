export type DROPDOWN = {
    title: string;
    fields: {
      id: number;
      title: string;
    }[];
  };
  
// types.ts

export type FOOTERDATA = {
    title: string;
    items: {
      id: number;
      title: string;
    }[];
  }
  
  export const footerData: FOOTERDATA[] = [
    {
      title: "About us",
      items: [
        { id: 1, title: "Our Team" },
        { id: 2, title: "Our Brand" },
        { id: 3, title: "FAQ’s" },
        { id: 4, title: "Join Us" },
        { id: 5, title: "News" },
        { id: 6, title: "Support" },
        { id: 7, title: "Affiliate" },
        { id: 8, title: "Sitemap" },

      ]
    },
    {
      title: "Policy",
      items: [
        { id: 1, title: "Terms & Conditions" },
        { id: 2, title: "Privacy Policy" },
        { id: 3, title: "Warranty Policy" },
        { id: 4, title: "Return & Refund Policy" },
        { id: 5, title: "Shipping Policy" },
        { id: 6, title: "Track Order" },
      ]
    },
    {
      title: "Social media links ",
      items: [
        { id: 1, title: "Facebook" },
        { id: 2, title: "Instagram" },
        { id: 3, title: "Twitter" },
        { id: 4, title: "Youtube" },
        { id: 5, title: "Pinterest" },
        { id: 6, title: "Blogs" },
        { id: 7, title: "WhatsApp" },
        { id: 8, title: "Gift Cards" },
      ]
    }
  ];
  
  export const dropdownData: DROPDOWN[] = [
    {
      title: "Bags",
      fields: [
        { id: 1, title: "Option 1" },
        { id: 2, title: "Option 2" },
        { id: 3, title: "Option 3" },
      ],
    },
    {
      title: "Innerwear",
      fields: [
        { id: 4, title: "Option 1" },
        { id: 5, title: "Option 2" },
        { id: 6, title: "Option 3" },
      ],
    },
    {
      title: "Luggage",
      fields: [
        { id: 7, title: "Option 1" },
        { id: 8, title: "Option 2" },
        { id: 9, title: "Option 3" },
      ],
    },
    {
      title: "Laptop Strolleys",
      fields: [
        { id: 10, title: "Option 1" },
        { id: 11, title: "Option 2" },
        { id: 12, title: "Option 3" },
      ],
    },
    {
      title: "Leather Goods",
      fields: [
        { id: 13, title: "Option 1" },
        { id: 14, title: "Option 2" },
        { id: 15, title: "Option 3" },
      ],
    },
    {
      title: "Electronics",
      fields: [
        { id: 16, title: "Option 1" },
        { id: 17, title: "Option 2" },
        { id: 18, title: "Option 3" },
      ],
    },
    {
      title: "Home Appliances",
      fields: [
        { id: 19, title: "Option 1" },
        { id: 20, title: "Option 2" },
        { id: 21, title: "Option 3" },
      ],
    },
    {
      title: "Accesories",
      fields: [
        { id: 22, title: "Option 1" },
        { id: 23, title: "Option 2" },
        { id: 24, title: "Option 3" },
      ],
    },
  ];
  