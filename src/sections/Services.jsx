import { services } from "../constants"
import ServiceCard from "../Components/ServiceCard"

const Services = () => {
  return (
     
    <section className="max-container flex justify-center flex-wrap gap-9 ">
       
      {services.map((service)=>{
        
       return  <ServiceCard key= {service.label} service= {service}/>
      })}
    </section>
  )
}

export default Services