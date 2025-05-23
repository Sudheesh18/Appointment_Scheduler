import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Doctor.css';
import NavigationBar from './NavigationBar';
import SearchAndFilter from './SearchAndFilter';
import HealthTip from './HealthTip';
import DoctorOfDay from './DoctorOfDay';
import ThemeToggle from './ThemeToggle';

function Cardiologist() {
  const navigate = useNavigate();
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  
  const cardiologists = [
    {
      id: 1,
      name: "Dr. Abinav",
      available: "Mon, Wed, Fri (9am - 1pm)",
    },
    {
      id: 2,
      name: "Dr. Barath",
      available: "Tue, Thu (2pm - 6pm)",
    },
    {
      id: 3,
      name: "Dr. Charan",
      available: "Sat (10am - 12pm)",
    }
  ];

  useEffect(() => {
    setFilteredDoctors(cardiologists);
  }, []);

  const handleFilterChange = (filtered) => {
    setFilteredDoctors(filtered);
  };

  const handleSchedule = (doctorId) => {
    alert("Thank you for your request, your appointment will be scheduled soon through an email");
    navigate('/');
  };

  return (
    <>
      <NavigationBar />
      <div className="doctor-page">
        <SearchAndFilter 
          doctors={cardiologists} 
          onFilterChange={handleFilterChange}
        />
        
        <div className="doctor-content">
          <div className="doctor-main">
            <div className="doctor-image-section">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA8QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xAA9EAABAwIEBAIHBwMCBwAAAAABAAIDBBEFEiExBhNBUSJhFDJScYGRoQcVIzNCwdFisfByghYkNFOSouH/xAAaAQACAwEBAAAAAAAAAAAAAAABAgADBAUG/8QAJhEAAgIBBAICAgMBAAAAAAAAAAECEQMEEiExE0EFUTJhQnGRIv/aAAwDAQACEQMRAD8A9MTXXuE/sk6y1FZLEh5PzERF6pQ97yKECYNlOo4xopErChJyaEroBHKN41Tg7onZdESA00Wdni1Xl32gUEkbxU04Iew32Xq7wsnxVStlp3ki+hRXIDzrBuOG04bBXXaRsTsVr6TibDpgPxW/NeZV9BDM58bmjQqoGB1cbj6PLZv+opfI+mSrPczjNDlzc5vzVfiPEdBHE78Zu3dePCjr2uyy1kluwcp20jYxmlkcT/UVN7+g0HcQ4lFWTufENB+pXP2dsrJKjOWOEPQnqqHC6H7zr2wRtJjafEV7Pw5g0dHTtAYG2Rirdkb9F7SttE3NvZFMCia02AtspmNPZMwDwE6yQXSlCKy7ZJdCBBr26IdzUS4qF+qIGRgarrjYLoHVCVExz2CKRDk77EBSwGzQggS94ujQMrR2RAT5h3CSguEkCHT5KN5JspdwUO53ismITl2WJMpxm1KU2kQ80qY2Yh6IHxjRdOibEbhSEXShRxouuOCe0LhGqARrBqpbaKPYqVjm216KNkRG9qqcXphNA5pHRW5kBOug7lROML9HeIHdVeaKLFimz524zifhuJmRhytebH3ruGVpkp7kAnqV79JS4XmHMo6Uu7uiBP1QuIcN4HikBY/D6dpP64mhjh8RZJ5k3wP4HR854jXS+kOAsB5IHnTzvEbbuc42AXqXEn2RVT3PnwXEI5SNRT1Ayk+54/cfFZbhDhqs+/pIa+mfDLTHK+N41B/sR5hPF7nRXKLibTgDh/0anje8XedSSvSoIWsbayGwnD208DWgAEBG1E0FJHzKiVkbL2BcbXKvfHBWh4aE8N0Sp3Rzxtlhe18bhdr2m4K5W1MFFAZah4Yy9hoSSewA3S2EaTYrt1DSVVPXU7KmjmZLE/1XNOiIyokOAroKWVIBAh12oUJCmTSFCEL9GFVrhd5Ksqk5Yyq2M5rp4ijoGXfdTzG2y7Sx7lPcy7vJQgLdySM5YSUIQxOzN1UTm+Me9dpzrZPcLvCJB04/DCjjOVilnHgCiaNLKEDac3CIAQ1MQG3RDXX2VUpKPY8YtjwkRqk02TXOPQJPLGux/HI5IQGeaDqJxE3U6qWV5toDdVdbJl9d1up8gsmXNfBswYFfIDiGITXu15ZEDqT2VLU8WWcGUoc8eW5QGO102Jzihw9pc1xygN3chnU0eGu9E0dURn8aS97u6geQ28zdZ64s62nwLJNQSDJH4tX1rZhVGJgbbltGY/HorVhxuBn4U4f5PZ/CAwus5OvdaCDERlFtUYxibc8Xj/5UU0UNXxFjtK3x0z3EfqicD9CicOxiaeQVdZSvlqLZW6Blh5nqreSann/Nib710S0VMzMxgJ6KyDlB8MyZYY8qUZY/8I38RYmzxto6cMHQ5rpsWNU/EMpoKqn5bw2+jrg3IsqvE8VdKC1gs1ZYYp92Y7TVjiRFmyTWOzDoflumjmlu5dlr+Kx5cEmoU64N9w5in3dPNSVpIZmJva4z9fmrrMMSm57oXsp4GOMYlsOa7a9ulv3XcDp6adlRKI2GpuQHuFwq/G6qnprurZw8XAcAbEgEaA7NGnYk+S1OR5NqgTAYXYM97CD/ANQYZomDSNumR3v2v5XPRa2yx03EEFNxGyOCVr4qmNr2PGzmfyL/ACN/066COuygsOjuxS+ZJ0y2GBzjcSysuEKGnqmyNGYWKIu3urI5IsSUJRdNDbLhCk08k12ydNCdAOIOyxlVlI4ORuKO/Dcqmgfd4HmrorgVl9DoE95ACZH6oXSMxSMI26Sdyx2SUIV8WklkQ0XcELtIEVF+YE9AJKjZRtF/D1Tqo2LR7RU0Qas+TNt4XZdjxuXL6JIoQ1gBNz5KRrLbFdaFyz2uu3xDsd1jk3J8mhUuh2oSDiPWbokHtO4sU9uRwspRBNdG7oENX4ZSV8Do5mXa7QkGx+YU01NmF4zZ3dAPqposzC0ZhuO4UbXTQ0U3zFgVDg2G8NxVE8QdJMGuc18huQAPVC83cXS1D5HG5cbklaDizG5WU9Sc1miM2F1i6GsMkTS52pF1nnNy49I9N8Nh2qcr5dFzBKGFHR1lhus/zvEp2TaJEzsTwKRfivA3KZLXhwsqR0yjMyO5la0key2dNG46rNcQAeIW0vdFmoQOJO5rL9kU+S+OPZZruAsclrMDqKH0kQ1MUfLbIT6nsOPl+kn4oahwGXGamSfHcQ9EihA5rXEukPl7IPfe3YrD8Pz1VNjlN6Lq+R4icw7Pa42sV6DjFNVmKOds0l6OQcyEg6tB6jrY6H5rbHmJ4P5HBHFqH9MJvwvS4pRtpqR0zWtLBFmJv/WLnfdWLaqrpJZmzMlloGuAgqXsINvYdexuO/XRC4zhkWHV0OL0Tf8Alpnc0gD1LjxAfA5h5tI6reUcseJ0DXSNZI14tILaE/5qo8e/hmSGXY7RnaPE4y/KXhvW5VmzE4ZNG6IPEeD4ZH83D5nQO35biXMP7hUlRhuM0OppHSt7xuzD+VmePJD0bVPFk5vk17aiMi4eNE30stdYvD2nYrAMx57XmJ+ZrhuHaEKwosRu7Nm3QjmkmGWnjXJpcRcHREqqw3WY+RU/pPOjIDgbhMwmIid2buurgzRyRr2czLicGX0ewUoCZFrZTdEWVjbJLqShKKiMiTK7qiYPzbk6AaoXD2SOOUNNk3FZuQ30eN34j/WI6BHLkUIthhFylSI5q0T1ZeCMrNApG4lG11g7W6zs8/ojzLJezhrbVVVVXZiJqaXOB26j+Vx5ScnZ1IwSVHo9PXxPFw4fNGsla4XBAXkIx30KpEzpg2OQatLtj3C1uFY/BLE29QwFw0u7dMptdiyxJ9GzkjbIzz6EdEAap1PLypSL2vfus/Pj0sJIzaKmmxI1+JQOluTE1xHiNtbbjrso8l9DRw/bNfVY2yAeJU9JjBra2UfpDSqLFp3ZtTewXeHhlhmqDe7z9OiRttlkUkuCSSiZiOPUtM9ueOSWzwfZ1JWFqqWTC8SqaCUWfBK5h9wOn0svUeEac1WMS1jm3bCwgHzd/wDAqz7U8C1ixqnZqAI6i3UdHf55K5YrxWa/j9b4tTsfTMQXkAFPZLohg+7bFca8jRZqPWwnYY6WwURluos5KXuUot3IcXlMcc+6R03TdToNztZEqnk7LTgPBjiPFtNJb8KnPNfp7J0Xr2NYW2oaamGRkVQL3c/Rr/eqv7PsC+6sJFRMy1VU2c4dh0Cq8QNS+uldiMj5HZtGG9m+4bLdfjx8+zw2rktVqZbXwiXD4cQrg/D6h8PosThYs8QBGwbp5layho46NoEJc0FoGVvq6babXWZw7Eo6ZtsoaSUfHjgzZQfgqPLzyVywekjRZj7bvmmmUjex96qBigPVPbiEbvWITrL+yp4PsrOL8FGJwtqKSEelR+YGce/usS5lRh78tVDLBbTxDT5r0eStgcQzPlPdNGR8OSdzJQejhe6pm9zs0Y3sVGOoazMBlctHQVAFieyHn4eojJzKO9Prcsb6vy6fBHQUDIWWa657pYuUXaDPbJFlSyh4PkpXPIVXRPLK0RE6OYfmEVVS5WGy6uGW+Ns5mWO2VIm57e66qbnv811aNiKNzLV9QynhLm2GUEkrNT1PMkdK+xc46oqvqTNRTOvYsAIHxA/dZs1BJ1K5urb3JG3TR4bJqqZztCdBt5LNYtTtLi+F743ndzDa6upZb9FU1z7A6XWdGszL+VBU86qc+W5AdmN9FtMHhomwCalDHZ9Q9o6LD1sTpJTrtqVBhlVX0Od1LO5jHO9Q6tPnZRqwKR6NWPzbu23UWFgh0k79ner7lhayuxWuc3mVDmgG4EXhH01KOZPjc0Qh9KIHtBjQ752QURrsv8RrYpJjEZmNJ3zO6KxZiVOym5cMjSbbNN1k6XhjOc0gu8m5J1VzQYC6CXw6D3oMshE2nC2PQ0NKYJaV3jeXF7Tqfh7lopcVwmspnw1LwIZGlr2SNIuFk8OowwC/1Vkae4sAL9CrYZZpV6K56eDladM884mwePCq4spaiOemeSYnNdcgdj5/3VOzR3iXo2J8NMqoyWxtHa3RY/FuG8QowXCJ00Q1uwXcPgqW7fR39LqqioyYKIQ4Ap4hDRc2AQdPO4eHU20Uwhra6ZkFJDJI92zWgm6KjZseely+Bkr2Am50W14B4U9OkZilez8BjrxsP6z39yr6bhR2ExsrcXYx7swPIJuAPNeo4RO2alZltYAWtoFsxadpbmcD5H5a14sT/tlk2w392iBr8Jo69wfM1zZBpnjdYkefdGbhNsei0OKZ59Np2ijqOFaIxv5M07ZcpyOc4EA+ei8m4hq8ewPEZCJRnYcpifGMjh30sfqvcppWQxl8rw1nW5WO4kgoOIKmON9NpEfzb2c4dtOiz5oRSs1YMknxI8qg+1CrjlEdTQQjWznNmOnwsr2l4yjrnBkf4bz0LxYrd4Zw9hdI21PQ08d9y2Maq2ZhmHXu6kgv1vGD/dZZKMujRCThxLkwMeN5ZBHO8scBsRv7u6s4cSzAFjjp1WtqMKwWWHJNhtI8ecDf4VLU8IYY+76GWakd0DX5m/J38pHjosWRP0NgxBxAu4qxp6sO3VI3BMVpX5bxTx9HNNj8ij4qSojbeQWPZADr0WJ5XOjmvZzSnPeJngMNxdVE1QY9DujuH7y0rpib3kdb6LbpMlNxMmqgq3IO9Gb2CSJyu7JLdZipGYaBMx0UjrNkYWXHS43WSY9xHi8L2+FzT0I3HzWsgGVwPZZHHr0mP1jdg93Mb7nC/wDe6zaqNpM06V8tE5eco1VfXOuLDUnZd9KuLXUTngHmO1t0WKjbRX1NGXWgZ67/AFvIIlmGRsa1gbeyPoGANdLLbmP+g7IpmQNNyLkpbYaQDFhzAdGBH09K2M3LQpGuaNSU7ntykDVGmTckTwgB19gBdS00rbF5/U7RE4dgWIV4Dy0QwOGj36fIblX9HwnSRtaJ5pZSBbTwhWxwTYj1EIlOKgMHhuUw17gdN1sYcEw1m1K13+pxKJZRUkXqUsI/2BOtM/bKnq19GKp8We0ESaKX70jc6zyCtk4MtbIy3bKFw0sMjcr4Y3N7FgUel/Y0db9xMHW4XhOI3dNTRmT2hofmFNwfRR4RjHIpW2iqG2eAe2xWtfgGHSHSnyHuwkKSiwqjopDJTxnmkWzOdewQhglGVlmTXRljcPsE4hoRU0UjSL3aQqLg+sc3PSSHxwuyrXVIDoyOwWAlkOGcS5iMrJzb4rfHo5J6G3UAhO2CgpZRJCwjqFMlaGMvxg2fmU8oB5DbX/pPmqaGsayTNbQ66LfyMa9pD2hwO4IuCoYqWnhN4qeJh7tYAqMmHeaMeo2LozEVewag/NPfiIsiuKpMOpqJ7XxtbUubdnKZ4yV4zU0fHM1XJ6DVPMBeTGHZbht9L+FZpYtrqzRHJuV0eonFZHHKZDqdrIuLEGtb64uvPGQcVU0EcktK6Y5AXDQ69dlGeIqimdkxGhqYf6+WbKqmi+z0gYoL2BuURHXtkAuR8V59SY/R1BAiqGk21F9Vd0tTnAINx0Si0i3xGETsc6O11Nw00x4TG0k5uY8n/wAj/CqjWviuRqFYYFVNkw+4dciRwPlc3/datJ+ZRqfwL3nu7hJCc1vtJLomCisyZWk+SyXHNORJTV7NnN5L/eNvotMZXbFDYpR/eOFz0mmZ1nRk+2NR+4+KTJG4j4pbZWefxSOvopzIooYJZZRHC12fYgDULSYbw00szVj3ZvZYVkWJy6NrypdlMJnFwaOyJiM8hAZBI73NWvo6Sjo22ipmXH6iLn6qWpf4QYxbyCsWmXsqef6Mo2gq2hhqAYmnuVY0sDadzZIhmc0h1+6LqiZIiHa21UEPi1arI44oDm2ehU8zaiGOZhBD2giylBVVwzKZKDlk+KI2+atTfqnM7JWFdcdFC11lMwZhdBgONbcqdrbBJjbJ6RsI0qNykKhkdYWRQCGUrH8YYe+WHnw/mRnO1ax5zEhQ1kDJ4HMIurFwAreE8RbW0EbrnNax960Q2Xm2EzuwTHX0kptDM4ujJ2v2XokMgkju1CSAiS64UrrhKATK8TwFuJRzv1jfHa/QEHZQQTQM3stZUQxTxmOaNr2HcFY/jGhgwfBqjEqaKSTkeJ8Rf+nqQfJZcuGTe5GzFnSVMMkrY3FpYBsuh9PK0h4BusHhXFeGVk/IZM+KosTypmkaDW9xcHTzV6ytY5oc1wLTs4FZWmuzSpRl0Wr8MwuR2Z1NAT3yC65NSUsMV42Nb2sFVmqvs5DTVbx67rt80GHgixGqEYNtkRwNU851bTncuD2/2P7KoxOeN8YLBsCouD6r0fG6e+jZSYzfz2+q0afh2U5VaZ6HynJIjKe66uhvOdtZRjuuiWx0d8t1Wh8p0vopYmkG+t0ewkk9LDBNz4ImsE1ydP1dU+CWxF1PG0z00kJve12eRCrWuIKipIsTsu2OY8atTHxNJ0+SEhmIaio7P1B180QA0kOrgQhoYw05fNWcrbeIoWRmVwf0KFDJlpw/Nyavlk2EgstK4LGxPMczJG9Ctix2eJrxsRdK1QjGFTwvsNVA5ca8DqgAPDhbdNc49FXSVWTYrsNVzDYlLtIFulUD5LrsjcwuFFlITJEHt80/LfQ7JoFgng21UIY/jTCHTQiopvDNEczCPLop+D8cFfSBr3Wlbo9p3ur+rjE8bmOtqvNsWim4axn06AH0aR34rQNvNMKz1QOuAkqvBsRirqVkjHg3GisC6xS0FEhIVfjFIzEcOqqOTVtRE6P3XFkbe4TJG6bhQJ8uw56LFaCoe7I6OUQTG21jkd9LrZmllwWtfTxSuLL5m9iCqj7RcKNFxDikLRljleKmMDs8eL/2v81piXYzw5RYlCM1RFGBIBue6plC0y7FOmSMqcwJboeoTJKg2IOoKFpZg6K/dckdfYrLsNdnKmUOZZCwPdTyRzNPijcHt94N115ubJrrHQJlwDs9Q/4kovab8iury7IP+5Ikrd4mxG+haCNkQ1jey6ktpgHxnLIMvRAV7GsqpWtFgHGySSA8BRHwqZj3NOhXUkRglzi6HVMeLwXXUlADG+r/ALVp8FldJQR5jfcJJITAwpy49oDSuJJBWAzaFcYTcJJIhQfA9xGpU9gd0kkCDHJHZJJQhA7U2VRxBRw1FI5srbgtK4kmQGYrgusnpcUno45DyWO8IdrZemwuLo2k7pJKegIkKa86JJIewnkv2wQR+m4fNbxuZIwnuBqqb7O6uaOPkh14zIQWntZJJL/IePRpcXwmljkD4c8ZdqQw6KhqWcs2BJ96SSpyLk0w6BQUuq6kqWWISSSShD//2Q=="
                alt="Cardiologist Department"
              />
            </div>

            <div className="doctor-list-section">
              <h2>Available Cardiologists</h2>
              <ul className="doctor-list">
                {filteredDoctors.map((doc) => (
                  <li key={doc.id} className="doctor-card">
                    <h3>{doc.name}</h3>
                    <p><strong>Available:</strong> {doc.available}</p>
                    <button onClick={() => handleSchedule(doc.id)}>
                      Schedule Appointment
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="doctor-sidebar">
            <HealthTip specialty="Cardiologist" />
            <DoctorOfDay specialty="Cardiologist" />
          </div>
        </div>
      </div>
      <ThemeToggle />
    </>
  );
}

export default Cardiologist;