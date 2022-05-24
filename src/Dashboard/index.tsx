import { useState, useEffect } from "react";
import { api } from "../services/api";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Container } from "./style";

interface DataProps {
  id: string;
  attributes: {
    slug: string;
    description: string;
    coverImage: {
      original: string;
    }
    canonicalTitle: string;
  }
}

interface AnimeProps {
  data: Array<DataProps>;
}

export function Dashboard() {
  const [animes, setAnimes] = useState({} as AnimeProps);

  useEffect(() => {
    api.get<AnimeProps>("/trending/anime")
      .then(res => setAnimes(res.data));
    console.log(animes);
  }, []);

  return (  
    <>
      <Container>
        {animes.data.map(anime => {
          return (
            <Card className="card" sx={{ maxWidth: 405 }} key={anime.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="150"
                  image={anime.attributes.coverImage.original}
                  alt={anime.attributes.canonicalTitle}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {anime.attributes.canonicalTitle}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Container>
    </>
  );
}