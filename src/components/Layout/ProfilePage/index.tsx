import React from 'react';

import Feed from '../../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon ,CakeIcon, Followage,EditButton  } from './styles';



const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner> 

        <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>

            <h1>Enzo Silva</h1>
            <h2>@enzo_silvaskt</h2>

            <p>
                Developer at <a href='https://www.mercadolivre.com.br/#from=homecom'>@MercadoLivre</a>
            </p>

            <ul>
                <li>
                    <LocationIcon/>
                    Sao Paulo, Brasil
                </li>
                <li>
                    <CakeIcon/>
                    Nascido(a) em 18 de setembro de 2003
                </li>
            </ul>

            <Followage>
                <span>
                    seguindo <strong>94  </strong>
                </span>
                <span>
                    <strong>  10000K </strong> seguidores
                </span>
            </Followage>
        </ProfileData>
    <Feed/>
    </Container>
  );
}

export default ProfilePage;