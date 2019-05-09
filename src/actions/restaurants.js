export const addRestaurant = ({name, location}) => {
  return {
    type: 'ADD_RESTAURANT',
    restaurant: { name: name, location: location }
  };
};
