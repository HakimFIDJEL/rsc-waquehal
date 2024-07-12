export function Button({className, ...props})
{

    if(props.href)
    {
        return <a className={className} {...props} />;   
    }
    return <button className={className} {...props} />;
}