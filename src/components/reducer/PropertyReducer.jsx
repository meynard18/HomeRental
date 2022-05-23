const locationFilter = (property, location) => {
   return property.filter((item) =>
      item.city.toLowerCase().includes(location.toLowerCase())
   );
};

const locationAndBedroomFilter = (property, location, bedroom) => {
   return property.filter(
      (item) =>
         item.city.toLowerCase().includes(location.toLowerCase()) &&
         item.bedroom === bedroom
   );
};
const locationAndBathroomFilter = (property, location, bathroom) => {
   return property.filter(
      (item) =>
         item.city.toLowerCase().includes(location.toLowerCase()) &&
         item.bathroom === bathroom
   );
};
const locationAndPriceFilter = (property, location, price) => {
   return property.filter(
      (item) =>
         item.city.toLowerCase().includes(location.toLowerCase()) &&
         item.price.toString().split('')[0] === price.toString()
   );
};

const locationBedroomBathroomFilter = (
   property,
   location,
   bedroom,
   bathroom
) => {
   console.log('3 filters');
   return property.filter(
      (item) =>
         item.city.toLowerCase().includes(location.toLowerCase()) &&
         item.bedroom === bedroom &&
         item.bathroom === bathroom
   );
};

const locationBedroomPrice = (property, location, bedroom, price) => {
   return property.filter(
      (item) =>
         item.city.toLowerCase().includes(location.toLowerCase()) &&
         item.bedroom === bedroom &&
         item.price.toString().split('')[0] === price.toString()
   );
};
const locationBathroomPrice = (property, location, bathroom, price) => {
   return property.filter(
      (item) =>
         item.city.toLowerCase().includes(location.toLowerCase()) &&
         item.bathroom === bathroom &&
         item.price.toString().split('')[0] === price.toString()
   );
};

// ----------------BEDROOM FUNCTIONS ---------------------------
const bedroomFilter = (property, bedroom) => {
   return property.filter((item) => item.bedroom === bedroom);
};

const bedRoomAndBathroomFilter = (property, bedroom, bathroom) => {
   return property.filter(
      (item) => item.bedroom === bedroom && item.bathroom === bathroom
   );
};
const bedroomAndPriceFilter = (property, bedroom, price) => {
   return property.filter(
      (item) =>
         item.bedroom === bedroom &&
         item.price.toString().split('')[0] === price.toString()
   );
};

const bedroomBathroomPrice = (property, bedroom, bathroom, price) => {
   return property.filter(
      (item) =>
         item.bedroom === bedroom &&
         item.bathroom === bathroom &&
         item.price.toString().split('')[0] === price.toString()
   );
};

// ----------------BATHROOM FUNCTIONS ---------------------------
const bathroomFilter = (property, bathroom) => {
   return property.filter((item) => item.bathroom === bathroom);
};

const bathroomAndPriceFilter = (property, bathroom, price) => {
   return property.filter(
      (item) =>
         item.bathroom === bathroom &&
         item.price.toString().split('')[0] === price.toString()
   );
};

//-------------------------PRICE FUNCTIONS--------------------------
const priceFilter = (property, price) => {
   return property.filter(
      (item) => item.price.toString().split('')[0] === price.toString()
   );
};

const filteredProperty = (property, location, bedroom, bathroom, price) => {
   if (
      location.toLowerCase().includes('any') &&
      bedroom === 'Any' &&
      bathroom === 'Any' &&
      price === 'Any'
   ) {
      return property;
   }
   if (
      !location.toLowerCase().includes('any') &&
      bedroom !== 'Any' &&
      bathroom !== 'Any' &&
      price !== 'Any'
   ) {
      return property.filter(
         (item) =>
            item.city.toLowerCase().includes(location.toLowerCase()) &&
            item.bedroom === bedroom &&
            item.bathroom === bathroom &&
            item.price.toString().split('')[0].includes(price.toString())
      );
   }
   // --------------- LOCATION CONDITIONS -------------------
   /* Location Only */
   if (
      !location.toLowerCase().includes('any') &&
      bedroom === 'Any' &&
      bathroom === 'Any' &&
      price === 'Any'
   ) {
      return locationFilter(property, location);
   }

   /* Location & Bedroom*/
   if (
      !location.toLowerCase().includes('any') &&
      bedroom !== 'Any' &&
      bathroom === 'Any' &&
      price === 'Any'
   ) {
      return locationAndBedroomFilter(property, location, bedroom, price);
   }

   /* Location & bathroom */
   if (
      !location.toLowerCase().includes('any') &&
      bedroom === 'Any' &&
      bathroom !== 'Any' &&
      price === 'Any'
   )
      return locationAndBathroomFilter(property, location, bathroom);

   /* Location & Price */
   if (
      !location.toLowerCase().includes('any') &&
      bedroom === 'Any' &&
      bathroom === 'Any' &&
      price !== 'Any'
   ) {
      return locationAndPriceFilter(property, location, price);
   }

   /*Location, Bedroom, Bathroom SELECTED */
   if (
      !location.toLowerCase().includes('any') &&
      bedroom !== 'Any' &&
      bathroom !== 'Any' &&
      price === 'Any'
   ) {
      return locationBedroomBathroomFilter(
         property,
         location,
         bedroom,
         bathroom
      );
   }

   /*Location, Bedroom , Price */
   if (
      !location.toLowerCase().includes('any') &&
      bedroom !== 'Any' &&
      bathroom === 'Any' &&
      price !== 'Any'
   )
      return locationBedroomPrice(property, location, bedroom, price);

   /* location & bathroom & price */
   if (
      !location.toLowerCase().includes('any') &&
      bedroom === 'Any' &&
      bathroom !== 'Any' &&
      price !== 'Any'
   )
      return locationBathroomPrice(property, location, bathroom, price);

   // --------------------BEDROOM CONDITIONS ------------------------
   // Bedroom Only
   if (
      bedroom !== 'Any' &&
      location.toLowerCase().includes('any') &&
      bathroom === 'Any' &&
      price === 'Any'
   )
      return bedroomFilter(property, bedroom);

   //Bedroom and Bathroom
   if (
      bedroom !== 'Any' &&
      bathroom !== 'Any' &&
      location.toLowerCase().includes('any') &&
      price === 'Any'
   ) {
      return bedRoomAndBathroomFilter(property, bedroom, bathroom);
   }

   //Bedroom and Price
   if (
      bedroom !== 'Any' &&
      bathroom === 'Any' &&
      location.toLowerCase().includes('any') &&
      price !== 'Any'
   ) {
      return bedroomAndPriceFilter(property, bedroom, price);
   }

   // bedroom & bathroom & price
   if (
      bedroom !== 'Any' &&
      bathroom !== 'Any' &&
      price !== 'Any' &&
      location.toLowerCase().includes('any')
   ) {
      return bedroomBathroomPrice(property, bedroom, bathroom, price);
   }
   // ------------------------BATHROOM CONDITIONS ----------------------------------
   // bathroom only
   if (
      bathroom !== 'Any' &&
      bedroom === 'Any' &&
      price === 'Any' &&
      location.toLowerCase().includes('any')
   )
      return bathroomFilter(property, bathroom);

   // bathroom & price
   if (
      bathroom !== 'Any' &&
      price !== 'Any' &&
      bedroom === 'Any' &&
      location.toLowerCase().includes('any')
   ) {
      return bathroomAndPriceFilter(property, bathroom, price);
   }

   // price only
   if (
      price !== 'Any' &&
      bathroom === 'Any' &&
      bedroom === 'Any' &&
      location.toLowerCase().includes('any')
   ) {
      return priceFilter(property, price);
   }
};
const propertyReducer = (state, action) => {
   switch (action.type) {
      case 'SET_PROPERTY':
         console.log('need to set propertyfiltered to initial value');
         return {
            ...state,
            property: action.payload,
            propertyFiltered: action.payload,
         };

      case 'SET_LOCATION':
         console.log(state.location);
         return {
            ...state,
            location: action.payload,
         };
      case 'SET_BEDROOM':
         console.log(state.bedroom);
         return { ...state, bedroom: action.payload };
      case 'SET_BATHROOM':
         console.log(state.bathroom);
         return { ...state, bathroom: action.payload };
      case 'SET_PRICE':
         console.log(state.price);
         return { ...state, price: action.payload };
      case 'SET_FILTERS':
         return {
            ...state,
            filters: action.payload,
            propertyFiltered: filteredProperty(
               state.property,
               state.location,
               state.bedroom,
               state.bathroom,
               state.price
            ),
         };
      default:
         throw new Error('No action');
   }
};

export default propertyReducer;
