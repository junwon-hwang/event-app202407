import React from "react";
import styles from './EventItem.module.scss';
import { Link, useNavigate, useParams , useSubmit } from "react-router-dom";

const EventItem = ({ event }) => {


  // 2. action 함수를 트리거하는 2번째 방법

  const submit = useSubmit();

  const {
    'event-id': id,
    title,
    desc: description,
    'img-url': image,
    'start-date': date
  } = event;

  // const { eventId: id } = useParams();

  const navigate = useNavigate();


  const deleteHandler =  (e) => {

    // action을 트리거
    submit(null,{method:'DELETE'});

  };
  
  return (
    <article className={styles.event}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <time>{date}</time>
      <p>{description}</p>
      <menu className={styles.actions}>
        <Link to="edit">Edit</Link>
        <button 
        onClick={deleteHandler}
        >Delete</button>
      </menu>
    </article>
  );
};

export default EventItem;

