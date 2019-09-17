import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {REQUET_GetRecruitmentPositionList} from './../actions/recruitment.actions'
import {HOST_RESOURCE} from './../constants/host'
import { log } from 'util';


class Recruitment extends Component{
    constructor(props) {
      super(props);
      this.state = {
        data: null
      }
    }
    _renderUI = (listAllCruitmentPosition) => {
      return listAllCruitmentPosition.map(department => {
        return <section id="staff" className="asset-section" key={department._id}>
        <div className="asset-section__header d-flex justify-content-center flex-column align-items-center">
          <div className="asset-section__header-title wow fadeIn" data-wow-delay="300ms">
            <h2 className="color-1C6BAE asset-section__header-title">{department.name}</h2>
            <div className="asset-section__header__recruitment-underline" />
          </div>
        </div>
        <div className="asset-section__container">
          <div className="container">
            <div className="row">
              {this._renderItemUI(department.item)}
            </div>
          </div>
        </div>
      </section>
      })
    }

    _renderItemUI = (list) => {
      const filterd = list.filter(item => item.status).sort((a, b) => a.sequence - b.sequence)
      return filterd.map(item => {
        return (
        <div className="col-6 col-md-4 col-lg-3 mb-3 wow fadeInUp" key={item._id}>
          <Link to={"/recruitment/"+(item._id)+"."+(item.url_name)}>
          <div className="recruitment-staff-item h-100">
            <div className="card text-left">
              <img className="card-img-top" src={HOST_RESOURCE+item.image_url} alt="" />
            </div>
            <div>
              <div className="card-body">
                <h4 className="card-title text-center name-department">{item.name}</h4>
              </div>
              <span className="btn card-footer d-block mb-0 pt-0 pl-1 pb-0">
                Xem chi tiết <img className="icon" src="/resources/tuyendung/icon tuyendung.png" alt="" />
              </span>
            </div>
          </div>
          </Link>
        </div>
        )
      })
    }
    componentDidMount() {
      this.props.REQUET_GetRecruitmentPositionList()
    }    
    render(){
      window.localStorage.setItem('jobs', JSON.stringify(this.props.recruitmentList));
        return(
           <React.Fragment>
            {this._renderUI(this.props.recruitmentList)}
           </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => ({
  recruitmentList: state.recruitmentReducers.recruitmentList
})

const mapDispatchToProps = (dispatch) => ({
  REQUET_GetRecruitmentPositionList: () => dispatch(REQUET_GetRecruitmentPositionList())
})
export default connect(mapStateToProps, mapDispatchToProps)(Recruitment);