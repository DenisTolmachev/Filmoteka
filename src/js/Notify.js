import { Notify } from 'notiflix';

Notify.init({
  width: '550px',
  position: 'center-top',
  distance: '150px',
  opacity: 1,
  fontSize: '16px',
  useIcon: false,
  fontAwesomeIconSize: '0px',
  failure: {
    background: 'transparent',
    textColor: '#FF001B',
  },
});

if (window.innerWidth < 768) {
  Notify.init({
    width: '300px',
    position: 'center-top',
    distance: '0px',
    fontSize: '12px',
    useIcon: false,
    fontAwesomeIconSize: '0px',
    failure: {
      background: 'transparent',
      textColor: '#FF001B',
    },
  });
}

export const onChangeSize = () => {
  if (window.innerWidth < 768) {
    Notify.init({
      width: '300px',
      position: 'center-top',
      distance: '0px',
      fontSize: '12px',
      useIcon: false,
      fontAwesomeIconSize: '0px',
      failure: {
        background: 'transparent',
        textColor: '#FF001B',
      },
    });
  } else {
    Notify.init({
      width: '550px',
      position: 'center-top',
      distance: '150px',
      opacity: 1,
      fontSize: '16px',
      useIcon: false,
      fontAwesomeIconSize: '0px',
      failure: {
        background: 'transparent',
        textColor: '#FF001B',
      },
    });
  }
};