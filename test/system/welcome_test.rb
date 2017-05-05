require "application_system_test_case"

class WelcomeTest < ApplicationSystemTestCase
  test '1' do
    visit '/'
    assert_selector 'h2', text: 'Welcome'
    assert_selector '#link_modal', text: 'Open modal welcome'

    click_link 'link_modal'
    find('#modal_welcome').visible?
    find('.overall_modal').visible?
    assert_selector '#modal_welcome h1', text: 'modal welcome'

    using_wait_time 1 do
      assert_selector '#modal_welcome .content', text: 'Content after update'
    end

    click_button 'bt_close'
  end

  test '2' do
    visit '/'
    assert_selector 'h2', text: 'Welcome'
    assert_selector '#link_modal', text: 'Open modal welcome'

    click_link 'link_modal'
    find('#modal_welcome').visible?
    find('.overall_modal').visible?
    assert_selector '#modal_welcome h1', text: 'modal welcome'

    using_wait_time 1 do
      assert_selector '#modal_welcome .content', text: 'Content after update'
    end

    click_button 'bt_close'
  end

  test '3' do
    visit '/'
    assert_selector 'h2', text: 'Welcome'
    assert_selector '#link_modal', text: 'Open modal welcome'

    click_link 'link_modal'
    find('#modal_welcome').visible?
    find('.overall_modal').visible?
    assert_selector '#modal_welcome h1', text: 'modal welcome'

    using_wait_time 1 do
      assert_selector '#modal_welcome .content', text: 'Content after update'
    end

    click_button 'bt_close'
  end

  test '4' do
    visit '/'
    assert_selector 'h2', text: 'Welcome'
    assert_selector '#link_modal', text: 'Open modal welcome'

    click_link 'link_modal'
    find('#modal_welcome').visible?
    find('.overall_modal').visible?
    assert_selector '#modal_welcome h1', text: 'modal welcome'

    using_wait_time 1 do
      assert_selector '#modal_welcome .content', text: 'Content after update'
    end

    click_button 'bt_close'
  end

  test '5' do
    visit '/'
    assert_selector 'h2', text: 'Welcome'
    assert_selector '#link_modal', text: 'Open modal welcome'

    click_link 'link_modal'
    find('#modal_welcome').visible?
    find('.overall_modal').visible?
    assert_selector '#modal_welcome h1', text: 'modal welcome'

    using_wait_time 1 do
      assert_selector '#modal_welcome .content', text: 'Content after update'
    end

    click_button 'bt_close'
  end

  test '6' do
    visit '/'
    assert_selector 'h2', text: 'Welcome'
    assert_selector '#link_modal', text: 'Open modal welcome'

    click_link 'link_modal'
    find('#modal_welcome').visible?
    find('.overall_modal').visible?
    assert_selector '#modal_welcome h1', text: 'modal welcome'

    using_wait_time 1 do
      assert_selector '#modal_welcome .content', text: 'Content after update'
    end

    click_button 'bt_close'
  end

  test '7' do
    visit '/'
    assert_selector 'h2', text: 'Welcome'
    assert_selector '#link_modal', text: 'Open modal welcome'

    click_link 'link_modal'
    find('#modal_welcome').visible?
    find('.overall_modal').visible?
    assert_selector '#modal_welcome h1', text: 'modal welcome'

    using_wait_time 1 do
      assert_selector '#modal_welcome .content', text: 'Content after update'
    end

    click_button 'bt_close'
  end

  test '8' do
    visit '/'
    assert_selector 'h2', text: 'Welcome'
    assert_selector '#link_modal', text: 'Open modal welcome'

    click_link 'link_modal'
    find('#modal_welcome').visible?
    find('.overall_modal').visible?
    assert_selector '#modal_welcome h1', text: 'modal welcome'

    using_wait_time 1 do
      assert_selector '#modal_welcome .content', text: 'Content after update'
    end

    click_button 'bt_close'
  end

  test '9' do
    visit '/'
    assert_selector 'h2', text: 'Welcome'
    assert_selector '#link_modal', text: 'Open modal welcome'

    click_link 'link_modal'
    find('#modal_welcome').visible?
    find('.overall_modal').visible?
    assert_selector '#modal_welcome h1', text: 'modal welcome'

    using_wait_time 1 do
      assert_selector '#modal_welcome .content', text: 'Content after update'
    end

    click_button 'bt_close'
  end

  test '10' do
    visit '/'
    assert_selector 'h2', text: 'Welcome'
    assert_selector '#link_modal', text: 'Open modal welcome'

    click_link 'link_modal'
    find('#modal_welcome').visible?
    find('.overall_modal').visible?
    assert_selector '#modal_welcome h1', text: 'modal welcome'

    using_wait_time 1 do
      assert_selector '#modal_welcome .content', text: 'Content after update'
    end

    click_button 'bt_close'
  end

end

