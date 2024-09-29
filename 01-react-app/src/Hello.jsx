
export function Hello(){
    let myName  = 'rahul';
    let number = 69;

    let fullName = () => {
        return 'Rahul Sharma';
    }

    return <p>
        MessageNo. {number} I am {fullName()}
    </p>
}