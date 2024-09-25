import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({logger:true});

server.register(cors, {
  origin: "*",
});

const drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Sergio Pérez", team: "Red Bull Racing" },
  { id: 3, name: "Charles Leclerc", team: "Ferrari" },
  { id: 4, name: "Carlos Sainz", team: "Ferrari" },
  { id: 5, name: "Lewis Hamilton", team: "Mercedes" },
  { id: 6, name: "George Russell", team: "Mercedes" },
  { id: 7, name: "Lando Norris", team: "McLaren" },
  { id: 8, name: "Oscar Piastri", team: "McLaren" },
  { id: 9, name: "Esteban Ocon", team: "Alpine" },
  { id: 10, name: "Pierre Gasly", team: "Alpine" },
  { id: 11, name: "Fernando Alonso", team: "Aston Martin" },
  { id: 12, name: "Lance Stroll", team: "Aston Martin" },
  { id: 13, name: "Valtteri Bottas", team: "Alfa Romeo" },
  { id: 14, name: "Guanyu Zhou", team: "Alfa Romeo" },
  { id: 15, name: "Kevin Magnussen", team: "Haas F1 Team" },
  { id: 16, name: "Nikita Mazepin", team: "Haas F1 Team" }, // Nota: Mazepin é uma adição fictícia para completar, pois ele não está na F1 atualmente.
  { id: 17, name: "Alex Albon", team: "Williams" },
  { id: 18, name: "Logan Sargeant", team: "Williams" },
  { id: 19, name: "Yuki Tsunoda", team: "Scuderia AlphaTauri" },
  { id: 20, name: "Liam Lawson", team: "Scuderia AlphaTauri" }
];


const teams = [
  { id: 1, team: "Red Bull Racing", basis: "Milton Keynes, Reino Unido" },
  { id: 2, team: "Ferrari", basis: "Maranello, Itália" },
  { id: 3, team: "Mercedes", basis: "Brackley, Reino Unido" },
  { id: 4, team: "McLaren", basis: "Woking, Reino Unido" },
  { id: 5, team: "Alpine", basis: "Enstone, Reino Unido" },
  { id: 6, team: "Aston Martin", basis: "Silverstone, Reino Unido" },
  { id: 7, team: "Alfa Romeo", basis: "Hinwil, Suíça" },
  { id: 8, team: "Haas F1 Team", basis: "Kannapolis, EUA" },
  { id: 9, team: "Williams", basis: "Grove, Reino Unido" },
  { id: 10, team: "Scuderia AlphaTauri", basis: "Faenza, Itália" }
];

server.get("/teams", async(req,res) => {
  res.type("application/json").code(200);
  return {teams};
})
server.get("/drivers", async(req,res) => {
  res.type("application/json").code(200);
  return {drivers};
})

interface DriverParams {
  id: string;
}

server.get<{Params: DriverParams }>("/drivers/:id", async(req,res) => {
  const id = parseInt(req.params.id);
  const driver = drivers.find((d) => d.id === id);

  if(!driver){
    res.type("application/json").code(404);
    return {message:"Driver is not Found!"};
  }else {
    res.type("application/json").code(200);
    return {driver};  
  }
  }  
)

server.listen({port:3333},() => {
console.log(`Servidor Rodando:`);
})