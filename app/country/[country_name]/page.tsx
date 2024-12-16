export default function CountryPage({ params }: { params: { country_name: string } }) {
    
    const countries = {
      pakistan: { name: 'Pakistan',  capital: 'Islamabad', big_city: 'Karachi', population: '235.8 Million' },
      india: { name: 'India', capital: 'New Dehli', big_city: 'Mumbai',  population: '1.417 Billion' },
      china: { name: 'China', capital: 'Beijing', big_city: 'Shanghai', population: '1.412 Billion' },
      usa: { name: 'United States of America', capital: 'Washington D.C',  big_city: 'New York',population: '333.3 Million' },
      france: { name: 'France', capital: 'Paris',  big_city: 'Paris', population: '67.97 Million' },
    };
  
   
    const Country = params.country_name ? countries[params.country_name.toLowerCase() as keyof typeof countries] : null;
  
    return (
      <div>
        {Country ? (
          <div>
            <h1 className="text-3xl text-amber-600">Country Name: {Country.name}</h1>
            <p className="text-3xl text-amber-600">Capital: {Country.capital}</p>
            <p className="text-3xl text-amber-600">Big City: {Country.big_city}</p>
            <p className="text-3xl text-amber-600">Population: {Country.population}</p>
          </div>
        ) : (
          <h1 className="text-3xl text-red-600">Country Not Found</h1>
        )}
      </div>
    );
  }
  