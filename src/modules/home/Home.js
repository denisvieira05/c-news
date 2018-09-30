import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

class Home extends PureComponent {

    render() {
        return (
            <div><h1>TESTE HOME</h1></div>
        )
    }
}


const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
