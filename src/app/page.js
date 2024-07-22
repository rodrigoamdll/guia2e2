import styles from "./page.module.css";

const Equipos = ({ equipos }) => {
  return (
    <div className={styles.container__list}>
      <h2 className={styles.title}>Equipos de Fútbol</h2>
      {equipos.map((equipo) => (
        <div key={equipo.id}>
          <h3 className={styles.nameclub}>{equipo.nombre}</h3>
          <ul className={styles.playerList}>
            {equipo.plantilla.map((jugador) => (
              <li className={styles.player} key={jugador.id}>
                <img src={jugador.foto} alt={jugador.nombre} className={styles.playerPhoto} />
                <div className={styles.playerInfo}>
                  <strong>{jugador.nombre}</strong>
                  <p>Altura: {jugador.Altura}m <br /> Peso: {jugador.Peso}Kg</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  // Simula la obtención de datos desde tu JSON
  const equiposData = [
    {
      "id": 1,
      "nombre": "Real Madrid",
      "plantilla": [
        { "id": 1, "nombre": "Eden Hazard", "Altura": "1.75", "Peso": "74", "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Eden_Hazard_at_Baku_before_2019_UEFA_Europe_League_Final.jpg/330px-Eden_Hazard_at_Baku_before_2019_UEFA_Europe_League_Final.jpg"},
        { "id": 2, "nombre": "Gonzalo García","Altura":"1.82","Peso":"74", "foto": "https://s.hs-data.com/bilder/spieler/gross/600867.jpg?fallback=png"},
        { "id": 3, "nombre": "Karim Benzema", "Altura": "1.85", "Peso": "81", "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Karim_Benzema_wearing_Real_Madrid_home_kit_2021-2022.jpg/330px-Karim_Benzema_wearing_Real_Madrid_home_kit_2021-2022.jpg" }
      ]},
    {
      "id": 2,
      "nombre": "Barcelona",
      "plantilla": [
        { "id": 1, "nombre": "Marc-André ter Stegen","Altura":"1.75","Peso":"74", "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Real_Valladolid_-_FC_Barcelona%2C_2018-08-25_%2879%29_%28cropped%29.jpg/330px-Real_Valladolid_-_FC_Barcelona%2C_2018-08-25_%2879%29_%28cropped%29.jpg"},
        { "id": 2, "nombre": "Iñigo Martinez","Altura":"1.82","Peso":"74", "foto": "https://upload.wikimedia.org/wikipedia/commons/2/23/UEFA_EURO_qualifiers_Sweden_vs_Spain_20191015_Inigo_Martinez_%28cropped%29.jpg"},
        { "id": 3, "nombre": "Gavi", "Altura": "1.85", "Peso": "81", "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Gavi_%28footballer%29.jpg/330px-Gavi_%28footballer%29.jpg"}
      ]},
      {
        "id": 3,
        "nombre": "Manchester City",
        "plantilla": [
          { "id": 1, "nombre": "Erling Haaland","Altura":"1.94","Peso":"88", "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Erling_Haaland_2023_%28cropped-v2%29.jpg/330px-Erling_Haaland_2023_%28cropped-v2%29.jpg"},
          { "id": 2, "nombre": "Kevin De Bruyne","Altura":"1.81","Peso":"70", "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Kevin_De_Bruyne_201807092.jpg/330px-Kevin_De_Bruyne_201807092.jpg"},
          { "id": 3, "nombre": "Julián Álvarez", "Altura": "1.71", "Peso": "71", "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Juli%C3%A1n_%C3%81lvarez_%28footballer%29_2023.jpg/330px-Juli%C3%A1n_%C3%81lvarez_%28footballer%29_2023.jpg"}
        ]},
        {
          "id": 3,
          "nombre": "Paris Saint-Germain",
          "plantilla": [
            { "id": 1, "nombre": "Lucas Beraldo","Altura":"1.86","Peso":"78", "foto": "https://s.hs-data.com/bilder/spieler/gross/547012.jpg"},
            { "id": 2, "nombre": "Lucas Hernández","Altura":"1.84","Peso":"79", "foto": "https://img.fcbayern.com/image/upload/t_cms-4x3-seo/v1669289236/cms/public/images/fcbayern-com/homepage/Saison-22-23/Profis/Hern%C3%A1ndez/221112-hernandez-ima.jpg"},
            { "id": 3, "nombre": "Lucas Lavallée", "Altura": "1.95", "Peso": "78", "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_I3TiOZENcISS-oXe9QYHPDgGqETq9ejWBg&s"}
          ]}
      // ... agregar otros equipos
  ];
  
  return (
    <main className={styles.main}>
      <div>
        <h1>Mi Aplicación de Fútbol</h1>
        <Equipos equipos={equiposData} />
      </div>
    </main>
  );
}