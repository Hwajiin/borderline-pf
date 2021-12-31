export const CLOUDINARY_URL =
  "https://res.cloudinary.com/djzpo9g8p/image/upload";

const imagePath = {
  home: {
    bg: {
      sm: `${CLOUDINARY_URL}/c_scale,f_auto,q_auto,w_1000/v1640875274/tennis-court2_wgzthw.jpg`,
      md: `${CLOUDINARY_URL}/c_scale,f_auto,q_auto,w_2500/v1640875274/tennis-court2_wgzthw.jpg`,
      lg: `${CLOUDINARY_URL}/c_scale,f_auto,q_auto,w_4000/v1640875274/tennis-court2_wgzthw.jpg`,
    },
  },
  projects: {
    portfolio: {
      sm: `${CLOUDINARY_URL}/c_scale,f_auto,q_auto,w_1000/v1640933654/portfolio-thumbnail2_jaz8rb.png`,
      md: `${CLOUDINARY_URL}/c_scale,f_auto,q_auto,w_2000/v1640933654/portfolio-thumbnail2_jaz8rb.png`,
      lg: `${CLOUDINARY_URL}/c_scale,f_auto,q_auto,w_1500/v1640933654/portfolio-thumbnail2_jaz8rb.png`,
    },
    covid19: {
      sm: `${CLOUDINARY_URL}/c_scale,f_auto,q_auto,w_1000/v1640933663/covid19-thumbnail_fzx1qp.png`,
      md: `${CLOUDINARY_URL}/c_scale,f_auto,q_auto,w_2000/v1640933663/covid19-thumbnail_fzx1qp.png`,
      lg: `${CLOUDINARY_URL}/c_scale,f_auto,q_auto,w_1500/v1640933663/covid19-thumbnail_fzx1qp.png`,
    },
    mntn: {
      sm: `${CLOUDINARY_URL}/c_scale,f_auto,q_auto,w_1000/v1640933654/mntn-thumbnail_zma7tv.png`,
      md: `${CLOUDINARY_URL}/c_scale,f_auto,q_auto,w_2000/v1640933654/mntn-thumbnail_zma7tv.png`,
      lg: `${CLOUDINARY_URL}/c_scale,f_auto,q_auto,w_1500/v1640933654/mntn-thumbnail_zma7tv.png`,
    },
  },
};

export default imagePath;
