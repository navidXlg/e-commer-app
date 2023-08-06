import classNames from "classnames";


export default function Panel({children, className, ...rest}){

    const classNameTotal = classNames('border border-sky-500 rounded w-32 text-center shadow-md',
    className);
    return(
        <div className={classNameTotal} {...rest}>
            {children}
        </div>
    )
};
