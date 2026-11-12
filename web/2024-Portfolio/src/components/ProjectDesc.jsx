const ProjectDesc = ({data}) => {
  const {title, skill, desc, gitLink} = {...data}
  return (
    <div className="projectDesc">
      <h3 className="projectDesc__title">{title}</h3>
        <div className="projectDesc__skill">
          <div className="projectDesc__skill--tit">Language :</div>
          <p className="projectDesc__skill--text">{skill.join(", ")}</p>
        </div>
        <div className="projectDesc__desc">
          <div className="projectDesc__desc--tit">Description :</div>
          <p className="projectDesc__desc--text" dangerouslySetInnerHTML={{__html: desc}}></p>
        </div>
        {
          gitLink ? 
          <div className="projectDesc__git-link">
            <div className="projectDesc__git-link--tit">GitHub: </div>
            <a href={gitLink} className="projectDesc__git-link--text" target="_blank" rel="noopener noreferrer">{gitLink}</a>
          </div> : null
        }
    </div>
  )
}

export default ProjectDesc;