import React, { useEffect, useState } from 'react';

const API_URL = 'https://congenial-fiesta-x5xv5jvwv4fpv6g-8000.app.github.dev/api/teams/';


function Teams() {
  const [teams, setTeams] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [teamName, setTeamName] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTeams(data));
  }, []);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleTeamNameChange = (e) => setTeamName(e.target.value);
  const handleAddTeam = (e) => {
    e.preventDefault();
    // Example POST request (not functional without backend support for POST)
    // fetch(API_URL, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name: teamName, members: [] })
    // })
    //   .then(res => res.json())
    //   .then(newTeam => setTeams([...teams, newTeam]));
    handleCloseModal();
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="display-6">Teams</h2>
        <button className="btn btn-primary" onClick={handleShowModal}>Add Team</button>
      </div>
      <div className="card">
        <div className="card-body">
          <table className="table table-striped table-hover">
            <thead className="table-primary">
              <tr>
                <th>Name</th>
                <th>Members</th>
              </tr>
            </thead>
            <tbody>
              {teams.map(team => (
                <tr key={team._id}>
                  <td>{team.name}</td>
                  <td>
                    {team.members && team.members.length > 0 ? (
                      <ul className="list-unstyled mb-0">
                        {team.members.map(member => (
                          <li key={member._id}>
                            <span className="badge bg-secondary me-1">{member.username}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-muted">No members</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bootstrap Modal for Add Team */}
      {showModal && (
        <div className="modal show fade d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Team</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
              </div>
              <form onSubmit={handleAddTeam}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="teamName" className="form-label">Team Name</label>
                    <input type="text" className="form-control" id="teamName" value={teamName} onChange={handleTeamNameChange} required />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                  <button type="submit" className="btn btn-primary">Add Team</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Teams;
