import './Info.css';
import  styles from  './Info.module.css';

console.log(styles);

function Info() {
    return (
        <div className={styles.info}>
            <h1>Hello from Info component</h1>
            <h2>Hello from Info component</h2>
            <button className='my-button'>Click me on the Info component</button>
            <button className={styles.myOtherButton}>Click me on the Info component</button>
        </div>
    )
}

export default Info;