const Card = (props) => {
    const { title, titleCard, children, variant = "", desc } = props;
    
    return (
        <>
            {title && (
                <div className="text-lg text-[color:var(--text-secondary)] mb-2">{title}</div>
            )}
            
            <div className={`flex-1 bg-[color:var(--card-bg)] text-[color:var(--text-color)] rounded-lg px-6 py-5 shadow-xl ${variant}`}>
                {titleCard && (
                    <div className="text-lg text-[color:var(--text-secondary)] mb-2">{titleCard}</div>
                )}
                
                {desc ? (
                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                        {desc}
                    </div>
                ) : (
                    children
                )}
            </div>
        </>
    );
};

export default Card;