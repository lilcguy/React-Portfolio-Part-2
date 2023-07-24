//reusable component for each individual project

/*takes the following params:
title
summary
technologies
role
repo
screenshot
screenshot2
demo

*/


export default function Project(props) {
    return (
        <div>
            {props.projects.map(item => (
            <div className="project-container">
                <div className="project-item-container">
                    <h1 className="text-item">{item.title}</h1>
                    <h3 className="text-item">{item.summary}</h3>
                    <h4 className="text-item">Technologies used: {item.technologies}</h4>
                    <h4 className="text-item">Role: {item.role}</h4>
                </div>
                <div className="project-item-container">
                    {item.screenshot ? <img src={item.screenshot} alt="project screenshot" className="image text-item"></img> : null}
                    {item.screenshot2 ? <img src={item.screenshot2} alt="project screenshot" className="image text-item"></img> : null}
                </div>
                <div className="project-item-container">
                    <a className="project-links" href={item.repo}>Repository Link</a>
                    <div>
                        {item.demo ? <a className="project-links" href={item.demo}>Video Demo Link</a> : null}
                    </div>
                </div>
            </div>
            ))}

        </div>
    )
}