import classNames from "classnames";

export default function Button({
    children,
    shadow,
    primary,
    secoundry,
    success,
    warning,
    danger,
    snapp,
    outline,
    rounded,
    ...restHandler
}){
    
        const clase = classNames(restHandler.className, 'px-3.5 py-2 border',{
            'text-slate-100 bg-blue-700':primary,
            'text-slate-100 bg-gray-700':secoundry,
            'text-slate-100 bg-green-700':success,
            'text-slate-100 bg-yellow-700':warning,
            'text-slate-100 bg-red-700':danger,
            'bg-pink-700' : snapp,
            'shadow-lg' : shadow ,  
            'rounded' :rounded,
            'bg-white': outline,
            'text-blue-200 border-blue-700 ': outline && primary, 
            'text-gray-200 border-gray-700': outline && secoundry, 
            'text-green-200 border-green-700': outline && success, 
            'text-yellow-200 border-yellow-700': outline && warning, 
            'text-red-200 border-red-700': outline && danger 

        });

    return <button  {...restHandler} className={clase}>{children}</button>
};

Button.propTypes ={
    checkoutBtn:({primary, secoundry,success,warning,danger})=>{
        const count = Number(!!primary) + Number(!!secoundry) + Number(!!success)
        + Number(!!warning) + Number(!!danger);

        if(count>1){
           return new Error('two propoertie of btn name can not be passed');
        };
    },

};