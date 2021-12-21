const obj = {
  global: () => ({
    html: {
      scrollBehavior: 'smooth',
    },
    // font
    'html, body': {
      background: '#F5F5FF',
      display: 'flex',
      justifyContent: 'center',
      // fontFamily: "PingFangSC-Regular, PingFang SC;",
      width: '100%',
      height: '100%',
    },
    body: {},
    '#next': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    a: {
      _hover: {
        textDecoration: 'none',
      },
    },
    '#root': {
      position: 'relative',
      minHeight: '100%',
      display: 'flex',
      flexDiretion: 'column',
    },

    'footer.page-footer': {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: '-233px',
    },

    ':focus': {
      outline: 'none',
      boxShadow: 'none',
    },
    '.swiper-container': {
      width: '100%',
      height: '100%',
    },
    '.swiper-slide ': {
      width: '100%',
      display: 'flex',
      flexFlow: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0px 0px 100px 0px',
    },
    '.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction': {
      bottom: '48.5px',
    },

    '#from': {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    '.swiper-button-prev': {
      left: '5rem',
      color: 'red',
      background: '#D2D2D2',
      width: '9rem',
      height: '9rem',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      borderRadius: '50%',
      _hover: {
        top: 'calc(50% - 1.5rem)',
        left: '3.5rem',
        width: '12rem',
        height: '12rem',
        backgroundColor: '#FFFFFF',
        backgroundImage: 'url(/images/buttoncilck.png)',
      },
    },
    '.swiper-button-prev:active': {},
    '.swiper-button-next': {
      right: '5rem',
      color: 'red',
      background: '#D2D2D2',
      width: '9rem',
      height: '9rem',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      borderRadius: '50%',
      _hover: {
        top: 'calc(50% - 1.5rem)',
        right: '3.5rem',
        width: '12rem',
        height: '12rem',
        backgroundColor: '#FFFFFF',
        backgroundImage: 'url(/images/buttoncilck.png)',
      },
    },
    '.swiper-button-next:active': {},
    '.swiper-button-prev:after, .swiper-button-next:after': {
      display: 'none',
    },
    '.css-1qqukx9>*:not(style)~*:not(style)': {
      marginTop: '0px !important',
    },
    '.css-171vpxg': {
      paddingInlineStart: '4.2rem !important',
      webkitPaddingEnd: '4.2rem !important',
    },
  }),
};

export default obj;
