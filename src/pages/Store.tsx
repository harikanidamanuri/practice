import React from 'react';
import Header1 from '../components/Header1';
import Nav from '../components/Nav';

const locations = [

    { city: "Wrentham", area: "Premium Outlets", address: "1 Premium Outlets Blvd, Space 475", cityState: "Wrentham, Massachusetts 02093", phone: "(774) 847-1330" },
    { city: "Cambridge", area: "The Atrium", address: "29 Brattle Street", cityState: "Cambridge, Massachusetts 02138", phone: "(617) 315-4210" },
    { city: "Boston", area: "Boston Prudential Center", address: "800 Boylston St", cityState: "Boston, Massachusetts 02199", phone: "(857) 990-1373" },
    { city: "NYC", area: "Soho", address: "73 Spring St", cityState: "New York, New York 10012", phone: "(917) 985-6646" },
    { city: "Philadelphia", area: "King of Prussia", address: "160 N Gulph Rd", cityState: "King of Prussia, Pennsylvania 19406", phone: "(484) 680-7353" },
    { city: "Washington DC", area: "Georgetown", address: "3135 M St. NW", cityState: "Washington, DC 20007", phone: "(202) 921-0482" },
    { city: "Atlanta", area: "Ponce City Market", address: "675 Ponce de Leon Ave. NE, Suite W115B", cityState: "Atlanta, Georgia 30308", phone: "(404) 301-7460" },
    { city: "Nashville", area: "Green Hills", address: "2126 Abbott Martin Rd", cityState: "Nashville, Tennessee 37215", phone: "(615) 953-0237" },
    { city: "Minneapolis", area: "North Loop", address: "219 N 2nd St, #106", cityState: "Minneapolis, Minnesota 55401", phone: "(612) 682-4704" },
    { city: "Chicago", area: "Fulton Market", address: "833 W. Randolph St", cityState: "Chicago, Illinois 60607", phone: "(872) 270-0933" },
    { city: "Chicago", area: "Lincoln Park", address: "843 W Armitage Ave", cityState: "Chicago, Illinois 60614", phone: "(872) 234-6039" },
    { city: "Oakbrook", area: "Oakbrook Center", address: "100 Oakbrook Center", cityState: "Oak Brook, Illinois 60523", phone: "(312) 224-2955" },
    { city: "Denver", area: "Cherry Creek S/C", address: "3000 E 1st Ave", cityState: "Denver, Colorado 80206", phone: "(303) 927-0934" },
    { city: "Boulder", area: "Pearl Street", address: "1218 Pearl St", cityState: "Boulder, Colorado 80302", phone: "(303) 405-8361" },
    { city: "Los Angeles", area: "Century City", address: "10250 Santa Monica Blvd, Suite 1985", cityState: "Los Angeles, California 90067", phone: "(213) 374-2354" },
    { city: "Los Angeles", area: "Pasadena", address: "77 West Colorado Blvd", cityState: "Pasadena, California 91105", phone: "(626) 344-6222" },
    { city: "Newport Beach", area: "Fashion Island", address: "1125 Newport Center Drive", cityState: "Newport Beach, CA 92660", phone: "" },
    { city: "San Francisco", area: "Hayes Valley", address: "425 Hayes St", cityState: "San Francisco, California 94102", phone: "" },
    { city: "Phoenix", area: "Kierland Commons", address: "15220 N Scottsdale Rd", cityState: "Scottsdale, Arizona 85254", phone: "(480) 674-6337" },
    { city: "San Diego", area: "UTC La Jolla", address: "4301 La Jolla Village Dr, Suite 2330", cityState: "San Diego, California 92122", phone: "(858) 987-9533" },
    { city: "Palo Alto", area: "Stanford", address: "660 Stanford Shopping Center", cityState: "Palo Alto, California 94304", phone: "" },
    { city: "Livermore", area: "SF Premium Outlets", address: "3228 Livermore Outlets Dr, Ste 675", cityState: "Livermore, California 94551", phone: "(925) 800-3331" },
    { city: "Walnut Creek", area: "Broadway Plaza", address: "1259 Broadway Plaza", cityState: "Walnut Creek, California 94596", phone: "(925) 204-3330" },
    { city: "San Francisco", area: "The Village at Corte Madera", address: "1636 Redwood Hwy", cityState: "Corte Madera, CA 94925", phone: "(628) 266-0533" },
    { city: "Seattle", area: "University Village", address: "2625 NE University Village St", cityState: "Seattle, Washington 98105", phone: "(206) 339-4406" },
];

const Store = () => {
    return (
        <>
            <Header1 />
            <Nav />
            <div className="px-6 py-10 max-w-7xl mx-auto">
                <h1 className='justify-start font-bold text-2xl mb-4'>United States</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {locations.map((loc, i) => (
                    <div key={i} className="text-gray-800">
                        <h2 className="text-lg font-semibold">{loc.city}</h2>
                        <p className="text-sm font-medium text-gray-600">{loc.area}</p>
                        <p className="text-sm">{loc.address}</p>
                        <p className="text-sm">{loc.cityState}</p>
                        <p className="text-sm">{loc.phone}</p>
                    </div>
                ))}
            </div>
            </div>
            </>
    );
};

export default Store;
