const { smd, send } = require("../lib");

smd(
  {
    pattern: "messi",
    desc: "Get a random Messi image.",
    category: "fun",
    filename: __filename,
  },
  async (m) => {
    try {
      await m.send("Fetching a Messi image, please wait... ⚽");

      const data = [
        "https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg",
        "https://media.ambito.com/p/00b816c8629a9e1b05dea5df93022c0d/adjuntos/239/imagenes/040/327/0040327464/messi-2jpg.jpg",
        "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/12/01/16698512119239.jpg",
        "https://ca-times.brightspotcdn.com/dims4/default/a84f325/2147483647/strip/true/crop/1024x683+0+0/resize/1200x800!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fd4%2F77%2F1a2481ed4e95bfdd6724d26709ad%2Fap22271074179210.jpg",
        "https://www.latercera.com/resizer/Z_VZi1Hqck1y5JOoHAWOiRlkDjY=/900x600/filters:focal(910x502:920x492)/cloudfront-us-east-1.images.arcpublishing.com/copesa/ZNSDISO5EYDK4DBFGDDJKYHQUM.jpg",
        "https://www.telam.com.ar/thumbs/bluesteel/advf/imagenes/2022/11/638278ec700c7_1200.jpg",
        "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/L5RFH3YOXBCFRIUX6QJANFWMYQ.jpg",
        "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt40015891deaa4019/6265b5649084154bb3b408c0/Lionel_Messi.jpg",
        "https://estaticos-cdn.sport.es/clip/c15604d8-94b8-4c9c-9cba-868e338ec1d0_alta-libre-aspect-ratio_default_0.jpg",
        "https://media.gq.com.mx/photos/5ffb662e9274cd36fe35683c/3:2/w_2997,h_1998,c_limit/messi-cerveza-goles-porteros.jpg",
        "https://editorial.uefa.com/resources/026c-12f705c46a6c-9f2eb0579483-1000/messi_graphic.jpeg",
        "https://depor.com/resizer/TG13hFqgVthTnVUzUhGkZVFNPOg=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6K6PFNOXZZGLPHDGZQAX2OGZBI.jpg",
        "https://eldiariony.com/wp-content/uploads/sites/2/2021/10/GettyImages-1234606862.jpg",
        "https://i.pinimg.com/564x/db/dc/0a/dbdc0acc5cf7bdfc7665e9125906c2ca.jpg",
        "https://cdn.futbolargentino.com/sdi/2020/08/17/lionel-messi-argentino-dejo-de-seguir-en-instagram-al-club-cule-y-se-reafirma-su-salida-850651-1.jpg",
        "https://i.pinimg.com/736x/0a/87/0f/0a870f03b0b411a2f10fe6cf87a1f40f.jpg",
        "https://cdn2.mediotiempo.com/uploads/media/2021/08/01/messi-agente-libre-junio-ig.jpg"
      ];

      if (!Array.isArray(data) || data.length === 0) {
        return await m.send("No Messi images found in the file.");
      }

      const randomUrl = data[Math.floor(Math.random() * data.length)];
      await send(m.chat, { url: randomUrl }, { caption: "*Messi*" });
    } catch (e) {
      await send(m.chat, `An error occurred: ${e.message}`);
    }
  }
);
