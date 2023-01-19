const locations = [
  {
    name: "155 W 47th St - Garage",
    price: "$55",
    openings: "26",
    img: require("./locationImages/155W-47th.jpg"),
    description: "This garage is operated by SP+. It is located on the North or right-hand side of W 47th St. (a one-way street) between 6th Ave. and 7th Ave.",
    mapsSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1363871492495!2d-73.9835167!3d40.7590249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855f307d013%3A0x18c4982f4fd9957a!2s155%20W%2047th%20St%2C%20New%20York%2C%20NY%2010036!5e0!3m2!1sen!2sus!4v1674119049470!5m2!1sen!2sus"
  },
  {
    name: "1601 Broadway - Valet",
    price: "$45",
    openings: "12",
    img: require("./locationImages/1601-Broadway.jpg"),
    description: "This is the Crowne Plaza valet garage operated by Quik Park. The entrances are located on the left-hand side of either street (both one-way streets) between 8th Ave. and Broadway.",
    mapsSrc: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d14375.923324193998!2d-73.99923373492219!3d40.758382399197295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x89c25856764fc8d3%3A0x1ca08b55180b5248!2s1601%20Broadway%2C%20New%20York%2C%20NY%2010019!3m2!1d40.760520299999996!2d-73.9850297!5e0!3m2!1sen!2sus!4v1674116369891!5m2!1sen!2sus"
  },
  {
    name: "164 W 46th St",
    price: "$65",
    openings: "42",
    img: require("./locationImages/164-W-46th.jpg"),
    description: "This is the 1540 Broadway garage, operated by Dock Parking. It is on the right-hand side of W 46th St between 7th Ave. and 6th Ave.",
    mapsSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12088.706633562122!2d-73.9844027!3d40.7581391!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7d224499b7f2d669!2s1540%20Broadway%20Garage%20LLC!5e0!3m2!1sen!2sus!4v1674119096946!5m2!1sen!2sus"
  },
  {
    name: "267-271 W 47th St.",
    price: "$62",
    openings: "14s",
    img: require("./locationImages/267-271-W-47th.jpg"),
    description: "This is the Biltmore Theatre garage, operated by SP+ (formerly Central Parking). It is located on the right-hand side of W 47th St. (a one-way street) between 7th Ave. and 8th Ave.",
    mapsSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12088.260578616346!2d-73.9869156!3d40.7605919!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6b64a8c569ceee40!2sCentral%20Parking!5e0!3m2!1sen!2sus!4v1674119142300!5m2!1sen!2sus"
  },
  {
    name: "790 8th Ave. - Garages",
    price: "$55",
    openings: "26",
    img: require("./locationImages/790-8th-Ave.png"),
    description: "This is the Hilton Garden Inn, which has a valet garage, operated by iPark. It is located on the east/right-hand side of 8th Ave. (a north/eastbound one-way street) between W 48th Ave. and W 49th Ave.",
    mapsSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12088.142241583953!2d-73.9865194!3d40.7612426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x58114f9a6ac3c7e3!2s790%208th%20Ave%20Garage!5e0!3m2!1sen!2sus!4v1674119182996!5m2!1sen!2sus"
  },
  {
    name: "235 W 50th St.",
    price: "$29",
    openings: "4",
    img: require("./locationImages/235-W-50th-St.jpg"),
    description: "This valet garage is operated by ABM. It is located on the north/left-hand side of W 50th St. (a one-way street) between 8th Ave. and Broadway. The entrance to the garage is marked by a Blue and Orange 'Park Here' sign with white lettering.",
    mapsSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12087.984129090886!2d-73.9847657!3d40.762112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xde4592c55f71cd97!2sParamount%20Plaza%20Parking%20Garage%20-%20ABM!5e0!3m2!1sen!2sus!4v1674119217520!5m2!1sen!2sus"
  },
  {
    name: "120 W 45th St. - Valet Garage",
    price: "$38",
    openings: "3",
    img: require("./locationImages/120-W-45th-St.jpg"),
    description: "This valet garage is operated by MPG Parking. It is located on the southwest/left-hand side of W 45th St. (a one-way street) between 6th Ave. and 7th Ave. The entrance is marked by a black 'Parking' sign with white lettering.",
    mapsSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12088.879626649756!2d-73.9840054!3d40.7571878!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x270e033028ec12a3!2sMPG%3A%20Manhattan%20Parking%20West%2045%20Street%20Corp.!5e0!3m2!1sen!2sus!4v1674119255976!5m2!1sen!2sus"
  },
  {
    name: "209 W 51st St. - Garage",
    price: "$30",
    openings: "17",
    img: require("./locationImages/209-W-51st-St.jpg"),
    description: "This valet garage is operated by IPark. It is located on the north/right-hand side of W 51st St. (a westbound one-way street) between 7th Ave. and Broadway. Look for the black 'Park' signs with the orange Icon logo above the garage entrance.",
    mapsSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.996300524351!2d-73.983209!3d40.76210609999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25856313785c9%3A0xae8324908d0d6f75!2s209%20W%2051st%20St%2C%20New%20York%2C%20NY%2010019!5e0!3m2!1sen!2sus!4v1674119296452!5m2!1sen!2sus"
  },
];

export default locations;