import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import CourseCard from '../../molecules/CourseCard/CourseCard';

const Section = styled.section`
  margin: 50px auto;
`;

export default function CourseCards() {
  return (
    <Section>
      <Container>
        <Row>
          {courses.map(course => (
            <CourseCard
              title={course.title}
              subtitle={course.subtitle}
              image={course.image}
              alt={course.alt}
            />
          ))}
        </Row>
      </Container>
    </Section>
  );
}

const courses = [
  {
    title: 'Title 1',
    subtitle: 'Subtitle 1',
    image: 'https://www.hybridskill.com/courseimages/img78.jpg',
    alt: 'Alt 1',
  },
  {
    title: 'Title 2',
    subtitle: 'Subtitle 2',
    image: 'https://www.hybridskill.com/courseimages/img78.jpg',
    alt: '',
  },
  {
    title: 'Title 3',
    subtitle: 'Subtitle 3',
    image: 'https://www.hybridskill.com/courseimages/img78.jpg',
    alt: '',
  },
  {
    title: 'Title 4',
    subtitle: 'Subtitle 4',
    image: 'https://www.hybridskill.com/courseimages/img78.jpg',
    alt: '',
  },
  {
    title: 'Title 5',
    subtitle: 'Subtitle 5',
    image: 'https://www.hybridskill.com/courseimages/img78.jpg',
    alt: '',
  },
  {
    title: 'Title 5',
    subtitle: 'Subtitle 5',
    image: 'https://www.hybridskill.com/courseimages/img78.jpg',
    alt: '',
  },
];
