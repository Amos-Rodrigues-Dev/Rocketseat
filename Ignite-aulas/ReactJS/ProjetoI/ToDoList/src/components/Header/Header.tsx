import { Flex, Icon, Image } from '@chakra-ui/react';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo.svg';

export function Header() {
  const navigate = useNavigate();
  return (
    <Flex
      as="header"
      w="100%"
      // maxWidth={1440}
      bg="gray.700"
      h={200}
      mx="auto"
      pb={4}
      px="6"
      position="relative"
      align="center"
      justify="center">
      <Image src={logo} />
      <Icon
        as={FiArrowLeft}
        top="10"
        left="10"
        position="absolute"
        fontSize={24}
        cursor="pointer"
        onClick={() => navigate('/')}
      />
    </Flex>
  );
}
