function Album ({album}) {
    const { link, cover_big, title, release_date } = album;

    return (
        <>
            <div className="album">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <div className="cover">
                        <img src={cover_big} alt={title} />
                    </div>
                    <div className="title"><h2>{title}</h2></div>
                    <div className="release-date">{release_date}</div>
                </a>
            </div>
        </>
    )
}

export default Album