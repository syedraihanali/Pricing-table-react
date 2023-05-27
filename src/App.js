
import Card from './components/Card';

const plans = [
  {
  name: 'Basic',
  price: 25,
  details: 'Access to gym facilities only during off-peak hours',
  features: [
    'Access to cardio machines',
    'Access to weightlifting equipment',
    'Access to locker rooms and showers',
    'Limited hours of operation'
  ]
  },
  {
    name: 'Standard',
  price: 35,
  details: 'Access to gym facilities during all hours',
  featured: true,
  features: [
    'Access to cardio machines',
    'Access to weightlifting equipment',
    'Access to locker rooms and showers',
    'Limited hours of operation'
  ]
  },
  {
    name: 'Premium',
  price: 50,
  details: 'Access to gym facilities during all hours',
  features: [
    'Access to cardio machines',
    'Access to weightlifting equipment',
    'Access to locker rooms and showers',
    'Limited hours of operation',
    'Access to presonal training sessions',

  
  ]

  }
]


function App() {
  return (
    <div className="h-full px-6 py-12 lg:flex lg:justify-center lg:items-center">
      <div className="grid lg:grid-cols-3 gap-12 lg:gap-0">
        {
          plans.map(plan=>(
            <div className={`w-full max-w-md mx-auto ${ plan.featured ? 'order-first lg:order-none lg:scale:110 lg:transform lg:z-10' : 'lg:transform lg:scale:50' }`}>
              <Card {...plan} key ={plan.name} />
            </div>
          ))
        }

      </div>
      
    </div>
  );
}

export default App;
